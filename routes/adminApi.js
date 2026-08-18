import express from 'express';
import admin_model from '../model/Admin.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import authMiddleware from '../middleware/auth.js'
import admin_middleware from '../middleware/adminAuth.js';
import logger from '../config/logger.js';

const router = express.Router();

router.get('/admin', admin_middleware, async (req, res) => {
    try {
        const admins = await admin_model.find();
        res.status(200).json(
            {
                message: "Get all admin successful.",
                data: admins
            }
        );
    } catch (error) {
        res.status(500).json(
            {
                message: error.message
            }
        )
    }
});

router.post('/admin', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newAdmin = new admin_model({
            ...req.body,
            password: hashedPassword
        });

        await newAdmin.save();
        res.status(201).json(
            {
                message: "Create new admin successful.",
                data: newAdmin
            }
        )
    } catch (error) {
        res.status(400).json(
            {
                message: error.message
            }
        )
    }
})

// router.post('/admin/login', async (req, res) => {
    
//     try {

//         const {username, password} = req.body;
//         // find username
//         const admin = await admin_model.findOne({username});

//         if(!admin){
//             return res.status(404).json(
//                 {
//                     message: "Admin not found!"
//                 }
//             )
//         }

//         // compare password with hashed password
//         const validePassword = await bcrypt.compare(password, admin.password);

//         if(!validePassword){
//             return res.status(401).json(
//                 {
//                     message: "Password is invalid"
//                 }
//             );
//         }
        
//         // create token with JWT
//         const token = jwt.sign(
//             {id: admin._id, username: admin.username},
//             process.env.JWT_SECRET,
//             {expiresIn: '1d'}
//         )

//         res.status(200).json(
//             {
//                 message: "Login successful.",
//                 token: token,
//                 data: {
//                     id: admin._id,
//                     username: admin.username
//                 }
//             }
//         )

//     } catch (error) {
//         res.status(401).json(
//             {
//                 message: error.message
//             }
//         )
//     }
// })

// ================================LOGIN_API======================================

// router.post('/admin/login', async (req, res) => {
//     try {
//         const {username, password} = req.body;

//         const admin = await admin_model.findOne({username});

//         if(!admin){
//             res.status(404).json(
//                 {
//                     message: "Your username is invalid!."
//                 }
//             )
//         }

//         const validPassword = await bcrypt.compare(password, admin.password);

//         if(!validPassword){
//             res.status(401).json(
//                 {
//                     message: "Your credentail is invalid."
//                 }
//             )
//         }

//         const token = jwt.sign(
//             {id: admin.id, username: admin.username},
//             process.env.JWT_SECRET,
//             {expiresIn: "1d"}
//         );

//         res.status(200).json(
//             {
//                 message: "Login admin successful.",
//                 token: token,
//                 data: {
//                     id: admin._id,
//                     username: admin.username
//                 }
//             }
//         )
        
//     } catch (error) {
//         res.status(404).json(
//             {
//                 message: error.message
//             }
//         );
//     }
// })

// =========================LOGIN_WITH_WISTON=========================

router.post('/admin/login', async (req, res) => {
    try {
        const {username, password} = req.body;

        const admin = await admin_model.findOne({username});

        if(!admin){
            logger.warn(`Failed login attempt: Username '${username}' not found.`); // winston
            return res.status(404).json(
                {
                    message: "Your username is invalid!."
                }
            )
        }

        const validPassword = await bcrypt.compare(password, admin.password);

        if(!validPassword){
            logger.warn(`Failed login attempt: Incorrect password for username '${username}'.`); // winston
            return res.status(401).json(
                {
                    message: "Your credentail is invalid."
                }
            )
        }

        const token = jwt.sign(
            {id: admin.id, username: admin.username},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );

        logger.info(`Admin logged in successfully: '${username}'`); // winston

        res.status(200).json(
            {
                message: "Login admin successful.",
                token: token,
                data: {
                    id: admin._id,
                    username: admin.username
                }
            }
        )
        
    } catch (error) {

        logger.error(`Login error: ${error.message}`, {stack: error.stack}); // winston

        res.status(404).json(
            {
                message: error.message
            }
        );
    }
})

router.post('/admin/logout', admin_middleware, async (req, res) => {
    try {
        res.status(200).json(
            {
                message: "Logout successful."
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: error.message
            }
        )
    }
})

router.get('/admin/:id', async (req, res) => {
    try {
        const admins = await admin_model.findById(req.params.id);

        res.status(200).json(
            {
                message: "Admin was found successful.",
                data: admins
            }
        );
    } catch (error) {
        res.status(404).json(
            {
                message: "Admin not found!",
                error: error.message
            }
        )
    }
})

router.put('/admin/:id', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // create object for update (updateAt)
        const updateData = {
            ...req.body,
            password: hashedPassword,
            updateAt: Date.now()
        }

        const admins = await admin_model.findByIdAndUpdate(req.params.id, 
            updateData, 
            {
                new: true
            }
        );

        res.status(200).json(
            {
                message: "Admin was updated successful.",
                data: admins
            }
        );
    } catch (error) {
        res.status(404).json(
            {
                message: "Admin not found!",
                error: error.message
            }
        )
    }
})

router.delete('/admin/:id', async (req, res) => {
    try {
        const admins = await admin_model.findByIdAndDelete(req.params.id);

        res.status(200).json(
            {
                message: "Admin was deleted successful."
            }
        )
    } catch (error) {
        res.status(400).json(
            {
                message: "Admin not found!",
                error: error.message
            }
        )
    }
})

export default router;