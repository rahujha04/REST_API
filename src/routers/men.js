const express = require('express');
const router = new express.Router();

const MensRanking = require('../models/mens');



// we will handle post req
router.post("/mens",async(req, res)=>{
    try{
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.send(insertMens);
    }catch(err){
        res.status(400).send(err);
    }
})

router.get("/mens",async(req, res)=>{
    try{
        const getMens = await MensRanking.find({});
        res.status(201).send(getMens);
    }catch(err){
        res.status(400).send(err);
    }
})

// router.get("/mens/:id",async(req, res)=>{
//     try{
//         const _id = req.params.id;
//         const getMen = await MensRanking.findById({_id});
//         res.status(201).send(getMen);
//     }catch(err){
//         res.status(400).send(err);
//     }
// })

module.exports = router;