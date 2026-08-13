import express from 'express';
import admin_model from '../model/Admin.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

router.get('/admin', async (req, res) => {
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

router.post('/admin/login', async (req, res) => {
    try {
        const {username, password} = req.body;
        // find username
        const admin = await admin_model.findOne({username});

        if(!admin){
            return res.status(404).json(
                {
                    message: "Admin not found!"
                }
            )
        }

        const validePassword = await bcrypt.compare(password, admin.password);

        if(!validePassword){
            return res.status(401).json(
                {
                    message: "Password is invalid"
                }
            );
        }

        res.status(200).json(
            {
                message: "Login successful.",
                data: {
                    id: admin._id,
                    username: admin.username
                }
            }
        )

    } catch (error) {
        res.status(401).json(
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