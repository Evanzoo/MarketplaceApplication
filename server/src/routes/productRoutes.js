const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.post('/create', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProductById);
router.put('/update/:productId', productController.updateProduct);
router.delete('/delete/:productId', productController.deleteProduct);

module.exports = router;
