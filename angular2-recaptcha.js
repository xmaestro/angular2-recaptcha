"use strict";
var core_1 = require('@angular/core');
var captcha_1 = require("./lib/captcha");
var ReCaptchaModule = (function () {
    function ReCaptchaModule() {
    }
    ReCaptchaModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [captcha_1.ReCaptchaComponent],
                    exports: [captcha_1.ReCaptchaComponent]
                },] },
    ];
    /** @nocollapse */
    ReCaptchaModule.ctorParameters = [];
    return ReCaptchaModule;
}());
exports.ReCaptchaModule = ReCaptchaModule;
