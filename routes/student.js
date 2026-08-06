// import express from "express";

// const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("Show student data successful.");
// });

// router.get("/:id", (req, res) => {
//     res.send("Found student data successful.");
// });

// export default router;

// =====================================================================================

import express from 'express';

const router = express();

router.get("/", (req, res) => {
    res.send("product retrieve successful.");
});

router.get("/:id", (req, res) => {
    res.send(`product ${req.params.id} found successful.`);
});

export default router;