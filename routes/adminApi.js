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

export default router;