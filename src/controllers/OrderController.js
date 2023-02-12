import db from '../models/index.js';
import cartController from './CartController.js';

const orderController = {
    async getOrder(req, res) {
        try {
            const { Orders } = await db.User.findOne({
                where: {ID_User: req.user.id},
                attributes: ['ID_User'],
                include: [{
                    model: db.Order,
                    include: [db.Product]
                }]
            });
            
            return res.status(200).json({
                isError: false,
                Orders
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async checkout(req, res) {
        try {
            const products = await cartController.getCartInfo(req.user.id);

            if (!products)
                return res.status(500).json({
                    isError: true,
                    message: 'Cart is empty'
                })
                
            let total = 0;
            products.forEach((product) => {
                total += (product.price - product.discount) * product.carts.dataValues.quantity;
            })

            const order = await db.Order.create({
                ID_User: req.user.id,
                total_money: total
            })
            
            products.forEach(async (product) => {
                await db.Order_Detail.create({
                    ID_Order: order.ID_Order,
                    ID_Product: product.ID_Product,
                    quantity: product.carts.dataValues.quantity
                })
            })

            cartController.setEmptyCart(req.user.id);
            return res.status(200).json({
                isError: false,
                order
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },
}

export default orderController;