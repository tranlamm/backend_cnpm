import db from '../models/index.js';
import { Op } from 'sequelize';

const voucherController = {

    async addNewVoucher(req, res) {
        try {
            if (!req.body.name || !req.body.value || !req.body.capability 
                || !req.body.description || !req.body.condition || !req.body.expriedAt)
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })

            const voucher = await db.Voucher.create({
                name: req.file.name,
                value: req.body.value,
                capability: req.body.capability,
                description: req.body.description,
                condition: req.body.condition,
                expriedAt: req.body.expried_at,
            });
            return res.status(200).json({
                isError: false,
                voucher,
                message: 'Create voucher successfully'
            })

        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },
    
    async getAllVoucher(req, res) {
        try {
            const vouchers = await db.Voucher.findAll();
            return res.status(200).json({
                isError: false,
                vouchers
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async updateVoucher(req, res) {
        try {
                if (!req.body.ID_Voucher || !req.body.name || !req.body.value || !req.body.capability 
                    || !req.body.description || !req.body.condition || !req.body.expriedAt)
                    return res.status(500).json({
                        isError: true,
                        message: 'Missing required field'
                    })

            const voucher = await db.Voucher.update({
                name: req.file.name,
                value: req.body.value,
                capability: req.body.capability,
                description: req.body.description,
                condition: req.body.condition,
                expriedAt: req.body.expried_at,
            },
            {
                where: {ID_Voucher: req.body.ID_Voucher}
            });

            return res.status(200).json({
                isError: false,
                message: 'Update voucher successfully'
            })

        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async deleteVoucher(req, res) {
        try {
            if (!req.body.ID_Vocuher)
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })

            await db.Voucher.destroy({ where: {ID_Voucher: req.body.ID_Vocuher}});

            return res.status(200).json({
                isError: false,
                message: 'Delete voucher successfully'
            })
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async getVoucherByID(req, res) {
        try {
            const voucher = await db.Voucher.findOne({
                where: {ID_Vocuher: req.params.id}
            });
            return res.status(200).json({
                isError: false,
                voucher
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },


}