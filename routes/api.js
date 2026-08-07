import express from 'express';
import user_model from '../model/Users.js';

// router is the variable
// express is the module
// Router() is the method
const router = express.Router();

router.get('/user', async (req, res) => {
    try {
        const users = await user_model.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

export default router;