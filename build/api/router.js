"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RedisClient_1 = __importDefault(require("../models/RedisClient"));
const logger_1 = require("../helpers/logger");
const getGroups_1 = __importDefault(require("./groups/getGroups"));
const getGroup_1 = __importDefault(require("./groups/getGroup"));
const getGroupsEvent_1 = __importDefault(require("./groups/getGroupsEvent"));
const postGroup_1 = __importDefault(require("./groups/postGroup"));
const redis_1 = require("../constants/redis");
const expressHelper_1 = require("../helpers/expressHelper");
const router = express_1.default.Router();
// Cookies with host infos are required in every request
router.use((req, res, next) => {
    const { USER_REGION, USER_PLATFORM } = req.cookies;
    if (!USER_REGION || !USER_PLATFORM) {
        expressHelper_1.newResError(res, "Please setup your account.");
    }
    else {
        next();
    }
});
// REDIS INIT
const redis = new RedisClient_1.default(redis_1.REDIS_CONFIG);
// ROUTES
router.get("/group/:groupId", getGroup_1.default(redis));
router.get("/groups", getGroups_1.default(redis));
router.get("/groups/:events", getGroupsEvent_1.default(redis));
router.post("/groups", postGroup_1.default(redis));
logger_1.logDone("API Router loaded");
exports.default = router;
//# sourceMappingURL=router.js.map