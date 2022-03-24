const router = require('express').Router();
const { police_check } = require('../../middlewares/index'); 
const deliveryAdressController = require('./controller')

router.get('/delivery-addresses', 
    police_check('view', 'DeliveryAddress'),
    deliveryAdressController.index
);

router.post('/delivery-addresses',
    police_check('create', 'DeliveryAddress'),
    deliveryAdressController.store
);

router.patch('/delivery-addresses/:id', deliveryAdressController.index);
router.delete('/delivery-addresses/:id', deliveryAdressController.destroy);

module.exports = router;