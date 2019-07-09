"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressHelper_1 = require("../../helpers/expressHelper");
const keyGenerator_1 = require("../../helpers/keyGenerator");
exports.default = (redis) => (req, res) => {
    const { USER_REGION, USER_PLATFORM } = req.cookies;
    const pattern = keyGenerator_1.getGroupsPattern({ platform: USER_PLATFORM, region: USER_REGION });
    // Get all the groups limited to 4 items
    return redis.getItems(pattern, 4)
        .then(result => expressHelper_1.newResResponse(res, result))
        .catch(err => expressHelper_1.newResError(res, err));
};
//# sourceMappingURL=getGroups.js.map