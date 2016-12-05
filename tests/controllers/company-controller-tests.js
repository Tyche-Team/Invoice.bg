/* globals require describe it */
"use strict";

const { expect } = require("chai"),
    httpMocks = require('node-mocks-http');

const username = "author",
    userId = 1,
    user = {
        username,
        _id: userId
    };

describe("Test company controller", () => {
    let controller = require("../../controllers/company-controller")();

    describe("checkCompanySettings()", () => {
        it("Expect to redirect to login if no user in request", () => {
            let expectedUrl = "/login";

            let request = httpMocks.createRequest({}),
                response = httpMocks.createResponse();

            controller.checkCompanySettings(request, response);

            let actualUrl = response._getRedirectUrl();
            expect(actualUrl).to.equal(expectedUrl);
        });
    });
    describe("getBlankCompanySettings()", () => {
        it("Expect to redirect to login if no user in request", () => {
            let expectedUrl = "/login";

            let request = httpMocks.createRequest({}),
                response = httpMocks.createResponse();

            controller.getBlankCompanySettings(request, response);

            let actualUrl = response._getRedirectUrl();
            expect(actualUrl).to.equal(expectedUrl);
        });

        it("Expect to render correct view if there is user", () => {
            let expectedView = "company-details";

            let request = httpMocks.createRequest({
                user
                }),
                response = httpMocks.createResponse();

            controller.getBlankCompanySettings(request, response);

            let actualView = response._getRenderView();
            expect(actualView).to.equal(expectedView);
        });
    });

    describe("getCompanySettings()", () => {
        it("Expect to redirect to login if no user in request", () => {
            let expectedUrl = "/login";

            let request = httpMocks.createRequest({}),
                response = httpMocks.createResponse();

            controller.getCompanySettings(request, response);

            let actualUrl = response._getRedirectUrl();
            expect(actualUrl).to.equal(expectedUrl);
        });
    });

    describe("createCompanySettings()", () => {
        it("Expect to redirect to login if no user in request", () => {
            let expectedUrl = "/login";

            let request = httpMocks.createRequest({}),
                response = httpMocks.createResponse();

            controller.createCompanySettings(request, response);

            let actualUrl = response._getRedirectUrl();
            expect(actualUrl).to.equal(expectedUrl);
        });
    });

    describe("changeCompanySettings()", () => {
        it("Expect to redirect to login if no user in request", () => {
            let expectedUrl = "/login";

            let request = httpMocks.createRequest({}),
                response = httpMocks.createResponse();

            controller.changeCompanySettings(request, response);

            let actualUrl = response._getRedirectUrl();
            expect(actualUrl).to.equal(expectedUrl);
        });
    });
});