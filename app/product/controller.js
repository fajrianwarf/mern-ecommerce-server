const path = require('path');
const fs = require('fs');
const config = require('../config');
const Product = require('./model');
const Category = require('../category/model')
const Tag = require('../tags/model');

//-----------------display all data--------------//
const index = async (req, res, next) => {
    try {
        let { skip = 0, limit = 10 } = req.query;

        let product = await Product
            .find()
            .skip(parseInt(skip))
            .limit(parseInt(limit))
            .populate('category')
            .populate('tags');
        return res.json(product);
    } catch (err) {
        next(err);
    }
}

//----------------store data--------------//
const store = async (req, res, next) => {
    try {
        let payload = req.body;

        //checking if there is category
        if(payload.category){
            let category = await Category.findOne({name: {$regex: payload.category, $options: 'i' }});
            if(category){
                payload = { ...payload, category: category._id };
            } else {
                delete payload.category;
            }
        }

        //checking if there is tags
        if(payload.tags && payload.tags.length > 0){
            let tags = await Tag.find({name: {$in: payload.tags}});
            if(tags.length){
                payload = {...payload, tags: tags.map(tag => tag._id)};
            } else {
                delete payload.tags;
            }
        }

        if(req.file){
            // console.log(req.file)
            let tmp_path = req.file.path;
            let originalExt = req.file.originalname.split('.')[req.file.originalname.split('.').length -1]; //use [length -1] if there are any '.' in the middle of the filename so that extension can be taken
            let filename = req.file.filename + '.' + originalExt;
            let target_path = path.resolve(config.rootPath, `public/images/products/${filename}`);

            const src = fs.createReadStream(tmp_path);
            const dest = fs.createWriteStream(target_path);
            src.pipe(dest);

            src.on('end', async () => {
                try {

                    let product = new Product({...payload, img_url: filename});
                    await product.save()
                    return res.json(product);
                
                } catch (err) {
                    fs.unlinkSync(target_path);
                    if(err && err.name === 'ValidationError') {
                        // console.log(err)
                        return res.json({
                            error: 1,
                            message: err.message,
                            fields: err.errors
                        })
                    }
                    
                    next(err);
                }
            });

            src.on('error', async () => {
                next(err);
            });

        } else {

            let product = new Product(payload);
            await product.save();
            return res.json(product);

        }
    } catch (err) {
        if(err && err.name === 'ValidationError'){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }

        next(err);
    }
}

//----------------update one data--------------//
const update = async (req, res, next) => {
    try {
        let payload = req.body;
        let { id } = req.params;

        if(payload.category){
            let category = await Category.findOne({name: {$regex: payload.category, $options: 'i' }});
            if(category){
                payload = {...payload, category: category._id};
            } else {
                delete payload.category;
            }
        }

        if(payload.tags && payload.tags.length > 0) {
            let tags = await Tag.find({name: {$in: payload.tags}});
            if(tags.length){
                payload = {...payload, tags: tags.map(tag => tag._id)};
            } else {
                delete payload.tags;
            }
        }
        
        if(req.file){
            // console.log(req.file)
            let tmp_path = req.file.path;
            let originalExt = req.file.originalname.split('.')[req.file.originalname.split('.').length -1]; //use [length -1] if there are any '.' in the middle of the filename so that extension can be taken
            let filename = req.file.filename + '.' + originalExt;
            let target_path = path.resolve(`${config.rootPath}/public/images/products/${filename}`);

            const src = fs.createReadStream(tmp_path);
            const dest = fs.createWriteStream(target_path);
            src.pipe(dest);

            src.on('end', async () => {
                try {
                    let product = await Product.findById(id);
                    let currentImage = `${config.rootPath}/public/images/products/${product.img_url}`
                    
                    if(fs.existsSync(currentImage)){
                        fs.unlinkSync(currentImage);
                    }

                    product = await Product.findByIdAndUpdate(id, payload, {
                        new: true,
                        runValidators: true
                    });
                    return res.json(product);
                
                } catch (err) {
                    fs.unlinkSync(target_path);
                    if(err && err.name === 'ValidationError') {
                        // console.log(err)
                        return res.json({
                            error: 1,
                            message: err.message,
                            fields: err.errors
                        })
                    }
                    
                    next(err);
                }
            });

            src.on('error', async () => {
                next(err);
            });

        } else {

            let product = await Product.findByIdAndUpdate(id, payload, {
                new: true,
                runValidators: true
            });
            return res.json(product);

        }
    } catch (err) {
        if(err && err.name === 'ValidationError'){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }

        next(err);
    }
}

//----------------delete one data--------------//
const destroy = async (req, res, next) => {
    try {
        let product = await Product.findByIdAndDelete(req.params.id);
        let currentImage = `${config.rootPath}/public/images/products/${product.img_url}`;

        console.log(currentImage);

        if(fs.existsSync(currentImage)) {
            fs.unlinkSync(currentImage);
        }
        
        return res.json(product);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    store,
    index,
    update,
    destroy
}