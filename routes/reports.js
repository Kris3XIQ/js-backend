/**
 * Routes for reports me-api.
 */
"use strict";

const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const SECRET_KEY = require("../config/config");
const router = express.Router();
const reportFunc = require("../models/report");
const bodyParser = require("body-parser");

if (process.env.NODE_ENV === "test") {
    SECRET_KEY = "123451234512345123451234512345123451234512345";
}

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

"use strict";

const getToken = req => {
    const authorization = req.get("authorization");
    if (authorization && authorization.toLowerCase().startsWith("owner ")) {
        return authorization.substring(6)
    }
    return null;
}

router.get("/", (req, res) => {
    const token = getToken(req);
    const decipherToken = jsonwebtoken.verify(token, SECRET_KEY);
    if (!token || !decipherToken.id) {
        return res.status(401).json({ error: "Token is missing or is invalid " })
    }
})

router.post("/", (req, res) => {
    const token = getToken(req);
    const decipherToken = jsonwebtoken.verify(token, SECRET_KEY);
    if (!token || !decipherToken.id) {
        return res.status(401).json({ error: "Token is missing or is invalid " })
    }
})

router.get("/week", (req, res) => {
    const reportContent = [{
            header: "TestHeader",
            text: "HereIsAllTheTextHereIsAllTheTextHereIsAllTheTextHereIsAllTheTextHereIsAllTheText"
        },
        {
            header: "TestHeader",
            text: "HereIsMoreText HereIsMoreText HereIsMoreText"
        }
    ];
    res.json({ data: reportContent });
});

router.get("/week/1", async function(req, res) {
    const reportData = {
        path: 1,
        header: "",
        content: ""
    };
    reportFunc.getReportHeader(1, (err, header) => {
        if (err)
            return res.status(500).send("Something on the server went wrong!");
        reportData.header = header.header;
    });
    reportFunc.getReportContent(1, (err, content) => {
        if (err)
            return res.status(500).send("Something on the server went wrong!");
        reportData.content = content.content;
        res.json({ data: reportData })
    });
});

router.post("/week/1", function(req, res) {
    const path = req.body.path;
    const header = req.body.header;
    const content = req.body.content;
    const token = getToken(req);
    const decipherToken = jsonwebtoken.verify(token, SECRET_KEY);
    if (!token || !decipherToken.id) {
        console.log("notoken");
        return res.status(401).json({ error: "Token is missing or is invalid " })
    }

    reportFunc.addReportContent([path, header, content, path], (err) => {
        if (err) {
            console.log("inne");
            return res.status(500).send("Something on the server went wrong!");
        }
        res.status(200)
            .redirect("/reports/week/1");
    })
});

router.get("/week/2", function(req, res) {
    const reportData = {
        path: 2,
        header: "",
        content: ""
    };
    reportFunc.getReportHeader(2, (err, header) => {
        if (err)
            return res.status(500).send("Something on the server went wrong!");
        try {
            reportData.header = header.header;
        } catch {
            reportData.header = "No content";
        }
    });
    reportFunc.getReportContent(2, (err, content) => {
        if (err)
            return res.status(500).send("Something on the server went wrong!");
        try {
            reportData.content = content.content;
        } catch {
            reportData.content = "Woops, doesnt seem to tbe anything here!";
        }
        res.json({ data: reportData })
    });
});

router.get("/week/3", function(req, res) {
    const reportData = {
        path: 3,
        header: "",
        content: ""
    };
    reportFunc.getReportHeader(3, (err, header) => {
        if (err)
            return res.status(500).send("Something on the server went wrong!");
        try {
            reportData.header = header.header;
        } catch {
            reportData.header = "No content";
        }
    });
    reportFunc.getReportContent(3, (err, content) => {
        if (err)
            return res.status(500).send("Something on the server went wrong!");
        try {
            reportData.content = content.content;
        } catch {
            reportData.content = "Woops, doesnt seem to tbe anything here!";
        }
        res.json({ data: reportData })
    });
});

router.post("/week/3", function(req, res) {
    const path = req.body.path;
    const header = req.body.header;
    const content = req.body.content;
    const token = getToken(req);
    const decipherToken = jsonwebtoken.verify(token, SECRET_KEY);
    if (!token || !decipherToken.id) {
        console.log("notoken");
        return res.status(401).json({ error: "Token is missing or is invalid " })
    }

    reportFunc.addReportContent([path, header, content, path], (err) => {
        if (err) {
            console.log("inne");
            return res.status(500).send("Something on the server went wrong!");
        }
        res.status(200)
            .redirect("/reports/week/3");
    })
});

router.get("/week/4", function(req, res) {
    const reportData = {
        path: 4,
        header: "",
        content: ""
    };
    reportFunc.getReportHeader(4, (err, header) => {
        if (err)
            return res.status(500).send("Something on the server went wrong!");
        try {
            reportData.header = header.header;
        } catch {
            reportData.header = "No content";
        }
    });
    reportFunc.getReportContent(4, (err, content) => {
        if (err)
            return res.status(500).send("Something on the server went wrong!");
        try {
            reportData.content = content.content;
        } catch {
            reportData.content = "Woops, doesnt seem to tbe anything here!";
        }
        res.json({ data: reportData })
    });
});

router.post("/week/4", function(req, res) {
    const path = req.body.path;
    const header = req.body.header;
    const content = req.body.content;
    const token = getToken(req);
    const decipherToken = jsonwebtoken.verify(token, SECRET_KEY);
    if (!token || !decipherToken.id) {
        console.log("notoken");
        return res.status(401).json({ error: "Token is missing or is invalid " })
    }

    reportFunc.addReportContent([path, header, content, path], (err) => {
        if (err) {
            console.log("inne");
            return res.status(500).send("Something on the server went wrong!");
        }
        res.status(200)
            .redirect("/reports/week/4");
    })
});

router.get("/week/5", function(req, res) {
    const reportData = {
        path: 5,
        header: "",
        content: ""
    };
    reportFunc.getReportHeader(5, (err, header) => {
        if (err)
            return res.status(500).send("Something on the server went wrong!");
        try {
            reportData.header = header.header;
        } catch {
            reportData.header = "No content";
        }
    });
    reportFunc.getReportContent(5, (err, content) => {
        if (err)
            return res.status(500).send("Something on the server went wrong!");
        try {
            reportData.content = content.content;
        } catch {
            reportData.content = "Woops, doesnt seem to tbe anything here!";
        }
        res.json({ data: reportData })
    });
});

router.post("/week/5", function(req, res) {
    const path = req.body.path;
    const header = req.body.header;
    const content = req.body.content;
    const token = getToken(req);
    const decipherToken = jsonwebtoken.verify(token, SECRET_KEY);
    if (!token || !decipherToken.id) {
        console.log("notoken");
        return res.status(401).json({ error: "Token is missing or is invalid " })
    }

    reportFunc.addReportContent([path, header, content, path], (err) => {
        if (err) {
            console.log("inne");
            return res.status(500).send("Something on the server went wrong!");
        }
        res.status(200)
            .redirect("/reports/week/5");
    })
});

router.get("/week/6", function(req, res) {
    const reportData = {
        path: 6,
        header: "",
        content: ""
    };
    reportFunc.getReportHeader(6, (err, header) => {
        if (err)
            return res.status(500).send("Something on the server went wrong!");
        try {
            reportData.header = header.header;
        } catch {
            reportData.header = "No content";
        }
    });
    reportFunc.getReportContent(6, (err, content) => {
        if (err)
            return res.status(500).send("Something on the server went wrong!");
        try {
            reportData.content = content.content;
        } catch {
            reportData.content = "Woops, doesnt seem to tbe anything here!";
        }
        res.json({ data: reportData })
    });
});

router.post("/week/6", function(req, res) {
    const path = req.body.path;
    const header = req.body.header;
    const content = req.body.content;
    const token = getToken(req);
    const decipherToken = jsonwebtoken.verify(token, SECRET_KEY);
    if (!token || !decipherToken.id) {
        console.log("notoken");
        return res.status(401).json({ error: "Token is missing or is invalid " })
    }

    reportFunc.addReportContent([path, header, content, path], (err) => {
        if (err) {
            console.log("inne");
            return res.status(500).send("Something on the server went wrong!");
        }
        res.status(200)
            .redirect("/reports/week/6");
    })
});

module.exports = router;
