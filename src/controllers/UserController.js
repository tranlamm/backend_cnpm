import bcrypt from "bcrypt";
import emailValidator from "email-validator";
import db from '../models/index.js';

const userController = {
    async register(req, res) {
        try {
            if (!req.body.fullname || !req.body.email || !req.body.password)
                return res.status(500).json({
                    message: 'Missing required field'
                })
            
            if (!emailValidator.validate(req.body.email))
                return res.status(500).json({
                    message: 'Email is invalid'
                })

            const dbUser = await db.User.findOne({
                where: {email: req.body.email}
            })

            if (dbUser)
                return res.status(500).json({
                    message: 'Email is already existed'
                })

            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const user = await db.User.create({
                ID_Role: 2,
                fullname: req.body.fullname,
                email: req.body.email,
                phone_number: req.body.phone_number,
                address: req.body.address,
                password: hashed,
            })

            return res.status(200).json({
                user,
                message: 'Register Successfully'
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default userController;