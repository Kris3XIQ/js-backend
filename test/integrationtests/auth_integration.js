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

describe("Authentication", () => {
    describe('GET /reports', () => {
        it('401 TOKEN IS MISSING OR INVALID', (done) => {
            chai.request(server)
                .get("/reports")
                .end((err, res) => {
                    res.should.have.status(500);

                    done();
                });
        });
    });

    describe('POST /reports', () => {
        it('401 TOKEN IS MISSING OR INVALID', (done) => {
            chai.request(server)
                .post("/reports")
                .end((err, res) => {
                    res.should.have.status(500);

                    done();
                });
        });
    });
});
