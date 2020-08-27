"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendMail = function (to, message) {
        return "Email enviado para " + to.name + " (" + to.email + "): " + message.subject;
    };
    return EmailService;
}());
exports.default = EmailService;
