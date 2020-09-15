/**
 * Models handling the CRUD elements of the database, including reports.
 */
"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/texts.sqlite");

const getReportHeader = (path, cb) => {
    return db.get(`SELECT header FROM reports WHERE path = ?`, [path], (err, row) => {
        cb(err, row)
    });
};

const getReportContent = (path, cb) => {
    return db.get(`SELECT content FROM reports WHERE path = ?`, [path], (err, row) => {
        cb(err, row)
    });
};

const addReportContent = (report, cb) => {
    return db.run('UPDATE reports SET path = ?, header = ?, content = ? WHERE path = ?', report, (err) => {
        cb(err)
    });
}

module.exports = {
    getReportHeader: getReportHeader,
    getReportContent: getReportContent,
    addReportContent: addReportContent
};
