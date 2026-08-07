import express from 'express';
import user_model from '../model/Users.js';

// router is the variable
// express is the module
// Router() is the method
const router = express.Router();

router.get('/user', async (req, res) => {
    try {
        const users = await user_model.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
});

router.post('/user', async (req, res) => {
    try {
        // create users object
        const users = new user_model(req.body);
        await users.save();
        res.status(201).json(users);
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
});

router.get('/user/:id', async (req, res) => {
    try {
        const users = await user_model.findById(req.params.id);

        if(!users){
            return res.status(404).json({
                message: "User not found!"
            })
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
});

router.put('/user/:id', async (req, res) => {
    try {
        const users = await user_model.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        if(!users){
            return res.status(404).json({
                message: "User not found!"
            });
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
});

router.delete('/user/:id', async (req, res) => {
    try {
        const users = await user_model.findByIdAndDelete(req.params.id);

        if(!users){
            return res.status(404).json({
                message: "User not found!"
            });
        }

        res.status(200).json({
            message: "User deleted successful."
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

export default router;