import express from 'express';
import productController from '../controllers/ProductController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';
const productRouter = express.Router();

productRouter.get('/getAllCategory', productController.getAllCategory);
productRouter.post('/addNewCategory', authMiddleware.verifyAdmin, productController.addNewCategory);

productRouter.get('/getAllProduct', productController.getAllProduct);
productRouter.get('/getProductByID/:id', productController.getProductByID);
productRouter.get('/searchProduct', productController.searchProduct);
productRouter.post('/addNewProduct', authMiddleware.verifyAdmin, productController.addNewProduct);
productRouter.post('/updateProduct', authMiddleware.verifyAdmin, productController.updateProduct);
productRouter.delete('/deleteProduct', authMiddleware.verifyAdmin, productController.deleteProduct);

export default productRouter;
