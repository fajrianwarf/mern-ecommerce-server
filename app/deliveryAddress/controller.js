const DeliveryAddress = require('./model');
const { policyFor } = require('../../utils/index');
const { subject } = require('@casl/ability');

//-----------------display all data--------------//
const index = async (req, res, next) => {
    try {
        // let address = await DeliveryAddress.find();
        // return res.json(address);

        let { skip = 0, limit = 10 } = req.query;
        let count = await DeliveryAddress.find({ user: req.user._id }).countDocuments();
        let address = await DeliveryAddress
            .find({ user: req.user._id })
            .skip(parseInt(skip))
            .limit(parseInt(limit))
            .sort('-createdAt');
        
        return res.json({ data: address, count });

    } catch (err) {
        if(err && err.name === 'ValidationError'){
            return res.json({
                error: 1,
                message: err.message,
                fileds: err.errors
            });
        }

        next(err);
    }
}

//----------------store data--------------//
const store = async (req, res, next) => {
    try {
        let payload = req.body;
        let user = req.user;
        let address = await new DeliveryAddress({...payload, user: user._id});
        await address.save();

        return res.json(address);
        
    } catch (err) {
        if(err && err.name === 'ValidationError'){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            })
        }

        next(err);
    }
}

//----------------update one data--------------//
const update = async (req, res, next) => {
    try {
        // let payload = req.body;
        // let user = req.user;
        // let address = await DeliveryAddress.findByIdAndUpdate(req.params.id, payload, { new: true, runValidators: true });
        // return res.json(address);

        let { _id, ...payload } = req.body;
        let { id } = req.params;
        let address = await DeliveryAddress.findById(id);
        let subjectAddress = subject('DeliveryAddress', {...address, user_id: address.user});
        let policy = policyFor(req.user);
        if(!policy.can('update', subjectAddress)){
            return res.json({
                error: 1,
                message: 'You are not allowed to modify this resource'
            });
        }

        address = await DeliveryAddress.findByIdAndUpdate(id, payload, { new: true });
        res.json(address);

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
        // let address = await DeliveryAddress.findByIdAndDelete(req.paras.id);
        // return res.json(address);

        let { id } = req.params;
        let address = await DeliveryAddress.findById(id);
        let subjectAddress = subject('DeliveryAddress', { ...address, user_id: address.user });
        let policy = policyFor(req.user);
        if(!policy.can('delete', subjectAddress)) {
            return res.json({
                error: 1,
                message: 'You are not allowed to delete this resource'
            })
        }

        address = await DeliveryAddress.findOneAndDelete(id);
        res.json(address);

    } catch (err) {
        if( err && err.name === 'ValidationError' ){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }

        next(err);
    }
}

module.exports = {
    index,
    store,
    update,
    destroy
}