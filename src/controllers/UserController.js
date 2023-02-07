import bcrypt from "bcrypt";
import emailValidator from "email-validator";
import jwt from "jsonwebtoken";
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
    },

    generateAccessToken(user) {
       return jwt.sign(
            {
                id: user.ID_User,
                role: user.ID_Role,
            }, 
            process.env.JWT_ACCESS_KEY,
            {
                expiresIn: "3d"
            }
        );
    },

    generateRefreshToken(user) {
        return jwt.sign(
            {
                id: user.ID_User,
                role: user.ID_Role,
            }, 
            process.env.JWT_REFRESH_KEY,
            {
                expiresIn: "365d"
            }
        );
     },

    async login(req, res) {
        try {
            if (!req.body.email || !req.body.password)
                return res.status(500).json({
                    message: 'Missing required field'
                })

            const user = await db.User.findOne({
                where: {email: req.body.email}
            })

            if (!user)
                return res.status(500).json({
                    message: 'Wrong username or password'
                })

            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );

            if (validPassword)
            {
                const accessToken = userController.generateAccessToken(user);
                const refreshToken = userController.generateRefreshToken(user);
                res.cookie("accessToken", accessToken, {
                    httpOnly: true,
                });
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                });
                return res.status(200).json({
                    message: 'Login Successfully',
                    user: user,
                })
            }
            else
                return res.status(500).json({
                    message: 'Wrong username or password'
                })
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async refreshToken(req, res) {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json("Token is invalid");
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                return res.status(403).json("Token is invalid");
            }
            const newAccessToken = userController.generateAccessToken({
                ID_User: user.id,
                ID_Role: user.role
            });
            const newRefreshToken = userController.generateAccessToken({
                ID_User: user.id,
                ID_Role: user.role
            });
            res.cookie("accessToken", newAccessToken, {
                httpOnly: true,
            });
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
            });
            return res.status(200).json("Refresh Token Successfully");
        })
    },

    async logout(req, res) {
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        return res.status(200).json({
            message: 'Logout Successfully'
        })
    },
}

export default userController;