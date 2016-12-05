/* globals require describe it beforeEach afterEach */
"use strict";

const { expect } = require("chai"),
    sinonModule = require("sinon"),
    httpMocks = require('node-mocks-http'),
    events = require('events');

const username = "author",
    userId = 1,
    user = {
        username,
        _id: userId
    },
    userNoSettings = {
        username: "Not valid",
        _id: 0
    },
    companySetting = {
        _id: 1,
        user: userId,
        name: "Test",
        bulstat: "0123456789"
    },
    companySettings = [companySetting];

describe("Test company controller", () => {
    let sinon;

    let data = {
        createCompanySettings() {},
        getCompanysettings() {},
        updateCompanysettings() {}
    };

    beforeEach(() => {
        sinon = sinonModule.sandbox.create();
        sinon.stub(data, "getCompanysettings", user => {
                let currentSetting = companySettings.find(cs => cs._id === user);
                return Promise.resolve(currentSetting);
            });
    });
    afterEach(() => {
        sinon.restore();
    });

    let controller = require("../../controllers/company-controller")(data);

    describe("checkCompanySettings()", () => {

        it("Expect to redirect to login if no user in request", () => {
            let expectedUrl = "/login";

            let request = httpMocks.createRequest({}),
                response = httpMocks.createResponse();

            controller.checkCompanySettings(request, response);

            let actualUrl = response._getRedirectUrl();
            expect(actualUrl).to.equal(expectedUrl);
        });

        it("Expect to redirect to company/create if no company for user", () => {
            let expectedUrl = "/company/create";

            let request = httpMocks.createRequest({
                    user: userNoSettings
                }),
            response = httpMocks.createResponse();

            controller.checkCompanySettings(request, response);

            response.on('end', function() {
                let actualUrl = response._getRedirectUrl();
                expect(actualUrl).to.equal(expectedUrl);
            });
        });

        it("Expect to redirect to /invoice/all if there is company for user", () => {
            let expectedUrl = "/invoice/all";

            let request = httpMocks.createRequest({
                    user
                }),
            response = httpMocks.createResponse();

            controller.checkCompanySettings(request, response);
            response.on('end', function() {
                let actualUrl = response._getRedirectUrl();
                expect(actualUrl).to.equal(expectedUrl);
            });
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

        it("Expect to redirect to company/create if no company for user", () => {
            let expectedUrl = "/company/create";

            let request = httpMocks.createRequest({
                    user: userNoSettings
                }),
            response = httpMocks.createResponse();

            controller.getCompanySettings(request, response);

            response.on('end', function() {
                let actualUrl = response._getRedirectUrl();
                expect(actualUrl).to.equal(expectedUrl);
            });
        });

        it("Expect to render to company-details if company found for user", () => {
            let expectedView = "company-details";

            let request = httpMocks.createRequest({
                    user: user
                }),
            response = httpMocks.createResponse();

            controller.getCompanySettings(request, response);

            response.on('end', function() {
                let actualView = response._getRenderView();
                expect(actualView).to.equal(expectedView);
            });
        });

        it("Expect to make view rending with correct user", done => {
            let requset = httpMocks.createRequest({
                    user
                }),
                response = httpMocks.createResponse({
                    eventEmitter: events.EventEmitter
                });

            controller.getCompanySettings(requset, response);

            response.on('end', function() {
                let actualUser = response._getRenderData().user;
                expect(actualUser).to.eql(user);
                done();
            });
        });

        it("Expect to make view rending with correct model", done => {
            let requset = httpMocks.createRequest({
                    user
                }),
                response = httpMocks.createResponse({
                    eventEmitter: events.EventEmitter
                });

            controller.getCompanySettings(requset, response);

            response.on('end', function() {
                let actualModel = response._getRenderData().model;
                expect(actualModel).to.eqls(companySetting);
                done();
            });
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