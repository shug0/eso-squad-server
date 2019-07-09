"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const keyGenerator_1 = require("../../helpers/keyGenerator");
const expressHelper_1 = require("../../helpers/expressHelper");
exports.default = (redis) => (req, res) => {
    // Extract host params
    const { USER_REGION: region, USER_PLATFORM: platform } = req.cookies;
    // Extract events from url params
    const events = req.params.events.split(",");
    // Check event string
    if (!events.length)
        return expressHelper_1.newResError(res, { msg: "Please provide the eventId" });
    // Generate promise getter for each event
    const eventsGetPromises = events.map((eventKey) => redis.getItems(keyGenerator_1.getGroupsEventPattern({ region, platform }, eventKey)));
    // Execute all the getter and return the concatenated result
    Promise.all(eventsGetPromises)
        .then(result => {
        const resultUnEmpty = result.filter(obj => !isEmpty_1.default(obj));
        expressHelper_1.newResResponse(res, resultUnEmpty[0]);
    })
        .catch(err => expressHelper_1.newResError(res, err));
};
//# sourceMappingURL=getGroupsEvent.js.map