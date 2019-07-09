"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressHelper_1 = require("../../helpers/expressHelper");
exports.default = (redis) => (req, res) => {
    const groupId = req.params.groupId;
    // Get all the groups limited to 4 items
    return redis
        .getItems(groupId, 4)
        .then(result => expressHelper_1.newResResponse(res, result))
        .catch(err => expressHelper_1.newResError(res, err));
};
//# sourceMappingURL=getGroup.js.map