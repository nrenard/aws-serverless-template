"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (_a) {
    var _b = _a.statusCode, statusCode = _b === void 0 ? 200 : _b, data = _a.data;
    return ({
        statusCode: statusCode,
        body: JSON.stringify(data),
    });
});
//# sourceMappingURL=buildRequest.js.map