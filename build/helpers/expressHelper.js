"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newResResponse = (res, data) => res.status(200).json(data);
exports.newResError = (res, err) => res.status(400).json({ err });
//# sourceMappingURL=expressHelper.js.map