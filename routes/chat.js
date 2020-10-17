/**
 * Routes for reports me-api.
 */
"use strict";

const express = require("express");
const router = express.Router();
const dbfunc = require("../db/dbfunctions");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

"use strict";

router.get("/", async function(req, res) {
    const query = {};
    const chatContent = await dbfunc.printEntries(query);

    res.json([chatContent]);
});

module.exports = router;
