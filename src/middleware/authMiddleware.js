import jwt from "jsonwebtoken";

const authMiddleware = {
    verifyToken(req, res, next) {
        const accessToken = req.cookies.accessToken;
        if (accessToken) {
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json({
                        error: true,
                        message: 'Token is invalid'
                    });
                }
                req.user = user;
                next();
            })
        }
        else {
            return res.status(401).json({
                error: true,
                message: 'Please login to continue'
            });
        }
    },

    verifyUser(req, res, next) {
        authMiddleware.verifyToken(req, res, () => {
            if (req.user.role == 2) { // User
                next();
            }
            else {
                return res.status(403).json({
                    error: true,
                    message: 'You are not authorized to perform this operation'
                });
            }
        })
    },

    verifyAdmin(req, res, next) {
        authMiddleware.verifyToken(req, res, () => {
            if (req.user.role == 1) { // Admin
                next();
            }
            else {
                return res.status(403).json({
                    error: true,
                    message: 'You are not authorized to perform this operation'
                });
            }
        })
    }
}

export default authMiddleware;