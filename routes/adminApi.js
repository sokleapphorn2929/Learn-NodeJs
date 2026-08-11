import express from 'express';
import admin_model from '../model/Admin.js'

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
        const newAdmin = new admin_model(req.body);
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
        // create object for update (updateAt)
        const updateData = {
            ...req.body,
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