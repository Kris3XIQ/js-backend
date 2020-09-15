/**
 * Routes for me(homepage) me-api.
 */
"use strict";

const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    const data = {
        creator: "Kristoffer",
        origin: "Stockholm",
        text: "Hej! Kristoffer heter jag och är en 27 åring från Stockholm. " +
            "På sidan av studierna så brukar jag spendera en hel del tid " +
            "framför burken med antingen design-relaterade program eller diverse " +
            "spel med polarna. Utöver det så ser jag fram emot att få utöka mina " +
            "kunskaper inom programmering nu under hösten!"
    };
    res.json(data);
});

module.exports = router;
