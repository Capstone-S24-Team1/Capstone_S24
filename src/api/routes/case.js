const express = require('express')
const router = express.Router()
const { getCase,
    createCase,
    updateCase,
    deleteCase } = require("../utils/database.js");

// GET
router.get("/", (req, res) => {
    const {caseName} = req.query;
    getCase(caseName).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
});

// Put
router.put("/", (req, res) => {
    const {caseName, caseSummary, caseCategory, caseLocation, caseReference, caseLink} = req.body;
    createCase(caseName, caseSummary, caseCategory, caseLocation, caseReference, caseLink).then((result) => {
        res.send(result.rows[0]);
    }).catch((err) => {
        console.log(err);
        console.log(caseName);
        res.sendStatus(400);
    });
});

// POST
router.post("/", (req, res) => {
    const {caseName, caseSummary, caseCategory, caseLocation, caseReference, caseLink} = req.body;
    updateCase(caseName, caseSummary, caseCategory, caseLocation, caseReference, caseLink).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
});

// DELETE
router.delete("/", (req, res) => {
    const {caseName} = req.body;
    deleteCase(caseName).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
});

module.exports = router;