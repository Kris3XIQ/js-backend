/**
 * Test for my index route
 */
"use strict";

/* global describe it */

process.env.NODE_ENV = "test";

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app.js');

chai.should();

chai.use(chaiHttp);

describe("Index", () => {
    describe('GET /', () => {
        it('200 CONNECTED SUCCESSFULLY', (done) => {
            chai.request(server)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);

                    done();
                });
        });
    });

    describe('GET /', () => {
        it('RETURNED CORRECT CONTENT', (done) => {
            chai.request(server)
                .get("/")
                .end((err, res) => {
                    res.body.should.be.an("object");
                    res.body.creator.should.equal("Kristoffer");
                    res.body.origin.should.equal("Stockholm");
                    res.body.text.should.be.a("string");

                    done();
                });
        });
    });
});
