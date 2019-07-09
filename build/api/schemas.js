"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Yup = require("yup");
const { PLATFORM, REGIONS, ROLES, ROLE_DD, ROLE_HEAL, ROLE_TANK } = require("../constants/game");
exports.userFormValidationSchema = Yup.object().shape({
    pseudo: Yup.string()
        .required("Enter your ESO account name")
        .max(40, "🤔"),
    cp: Yup.number()
        .min(0)
        .max(2000),
    lvl: Yup.number()
        .required("Enter your character level")
        .min(1)
        .max(50),
    role: Yup.string()
        .oneOf(ROLES)
        .required("Choose a role please"),
    platform: Yup.string()
        .oneOf(PLATFORM)
        .required("Select your platform"),
    region: Yup.string()
        .oneOf(REGIONS)
        .required("Select your region")
});
exports.newGroupFormValidationSchema = Yup.object().shape({
    host: exports.userFormValidationSchema,
    eventId: Yup.string(),
    players_template: Yup.object().shape({
        [ROLE_DD]: Yup.number().required(),
        [ROLE_HEAL]: Yup.number().required(),
        [ROLE_TANK]: Yup.number().required()
    }),
    created: Yup.number().required()
});
//# sourceMappingURL=schemas.js.map