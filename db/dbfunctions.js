/**
 * Express server | Backend me-API
 */

"use strict";

const mongo = require("mongodb").MongoClient;
const dsn = "mongodb://localhost:27017/chatwindow";

async function addEntry(msg) {
    mongo.connect(dsn, function(err, db) {
        if (err) {
            throw err;
        }
        const dbo = db.db("chatwindow");

        dbo.collection("users").insertOne(msg, function(err, res) {
            if (err) {
                console.log(res);
                throw err;
            }
            db.close();
        });
    });
}

async function printEntries(query) {
    const client = await mongo.connect(dsn);
    const db = await client.db("chatwindow");
    const col = await db.collection("users");
    const res = await col.find(query).toArray();

    await client.close();

    return res;
}

module.exports = {
    addEntry: addEntry,
    printEntries: printEntries,
};
