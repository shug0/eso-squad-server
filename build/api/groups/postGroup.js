"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("../schemas");
const expressHelper_1 = require("../../helpers/expressHelper");
const keyGenerator_1 = require("../../helpers/keyGenerator");
exports.default = (redis) => (req, res) => {
    try {
        // Payload values integrity checking
        schemas_1.newGroupFormValidationSchema.validateSync(req.body);
        // Generate key for group with eventId & hostId
        const key = keyGenerator_1.getGroupKey(req.body.host, req.body.eventId);
        // Create the group in redis
        redis.set(key, JSON.stringify(req.body));
        // Return success message
        return expressHelper_1.newResResponse(res, {
            msg: `Event created successfully in ${key}`,
            groupKey: key
        });
    }
    catch (err) {
        return expressHelper_1.newResError(res, err);
    }
};
//# sourceMappingURL=postGroup.js.map