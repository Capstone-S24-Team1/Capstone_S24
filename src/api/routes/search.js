const express = require('express')
const router = express.Router()
const { searchCase } = require("../utils/database.js");

// GET
router.get("/", (req, res) => {
    const {caseInput} = req.query;
    searchCase(caseInput).then((result) => {
        console.log(caseInput)
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
});

module.exports = router;