import express from 'express';
import voucherController from '../controllers/VoucherController';
import authMiddleware from '../middleware/authMiddleware.js';
const voucherRouter = express.Router();

voucherRouter.post('/addvoucher', authMiddleware.verifyAdmin, voucherController.addNewVoucher)
voucherRouter.get('/getAllVoucher', voucherController.getAllVoucher);
voucherRouter.get('/getVoucherByID/:id', voucherController.getVoucherByID);
productRouter.patch('/updateProduct', authMiddleware.verifyAdmin, voucherController.updateVoucher);
productRouter.delete('/deleteProduct', authMiddleware.verifyAdmin, voucherController.deleteVoucher);


export default voucherRouter;