/**
 * Test for my index route
 */
"use strict";

/* global describe it */

process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../app.js");

chai.should();

chai.use(chaiHttp);

describe("Reports", () => {
    describe("GET /reports/week/1", () => {
        it("200 CONNECTED SUCCESSFULLY", (done) => {
            chai.request(server)
                .get("/reports/week/1")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.path.should.equal(1);

                    done();
                });
        });
    });

    describe("GET /reports/week/1", () => {
        it("RETURNED CORRECT DATA WHEN DATA IS AVAILABLE", (done) => {
            chai.request(server)
                .get("/reports/week/1")
                .end((err, res) => {
                    res.body.data.path.should.equal(1);
                    res.body.data.header.should.equal("Kmom 01");

                    done();
                });
        });
    });

    describe("GET /reports/week/6", () => {
        it("RETURNED CORRECT DATA WHEN DATA IS NOT AVAILABLE", (done) => {
            chai.request(server)
                .get("/reports/week/6")
                .end((err, res) => {
                    res.body.data.path.should.equal(6);
                    res.body.data.header.should.equal("No content yet!");

                    done();
                });
        });
    });

    describe("POST /reports/week/6", () => {
        it("TRYING TO POST TO THE DATABASE WITHOUT A VALID TOKEN", (done) => {
            chai.request(server)
                .post("/reports/week/6")
                .end((err, res) => {
                    res.should.have.status(500);

                    done();
                });
        });
    });
});
