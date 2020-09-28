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

describe("Account", () => {
    describe("GET account/login", () => {
        it("200 CONNECTED SUCCESSFULLY", (done) => {
            chai.request(server)
                .get("/account/login")
                .end((err, res) => {
                    res.should.have.status(200);

                    done();
                });
        });
    });

    describe("POST account/login", () => {
        it("USER DOESNT EXIST", (done) => {
            chai.request(server)
                .post("/account/login")
                .end((err, res) => {
                    res.should.have.status(404);

                    done();
                });
        });
    });

    describe("GET account/register", () => {
        it("200 CONNECTED SUCCESSFULLY", (done) => {
            chai.request(server)
                .get("/account/register")
                .end((err, res) => {
                    res.should.have.status(200);

                    done();
                });
        });
    });

    describe("POST account/register", () => {
        it("RETURN ERROR MESSAGE FOR FAILED REGISTRATION", (done) => {
            chai.request(server)
                .post("/account/register")
                .end((err, res) => {
                    res.should.have.status(500);

                    done();
                });
        });
    });
});
