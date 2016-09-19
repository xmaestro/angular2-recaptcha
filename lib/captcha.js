"use strict";
var core_1 = require('@angular/core');
var ReCaptchaComponent = (function () {
    function ReCaptchaComponent(zone) {
        var _this = this;
        this.site_key = null;
        /* Available languages: https://developers.google.com/recaptcha/docs/language */
        this.language = null;
        this.captchaResponse = new core_1.EventEmitter();
        this.captchaExpired = new core_1.EventEmitter();
        /* if DI doesn't work, use this to create the zone object */
        //let zone = new NgZone({});
        window["verifyCallback"] = (function (response) { return zone.run(_this.recaptchaCallback.bind(_this, response)); });
        window["captchaExpiredCallback"] = (function () { return zone.run(_this.recaptchaExpiredCallback.bind(_this)); });
    }
    ReCaptchaComponent.prototype.recaptchaCallback = function (response) {
        this.captchaResponse.emit(response);
    };
    ReCaptchaComponent.prototype.recaptchaExpiredCallback = function () {
        this.captchaExpired.emit();
    };
    ReCaptchaComponent.prototype.ngOnInit = function () {
        var doc = document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = 'https://www.google.com/recaptcha/api.js' + (this.language ? '?hl=' + this.language : '');
        script.async = true;
        script.defer = true;
        doc.appendChild(script);
    };
    ReCaptchaComponent.reset = function () {
        //noinspection TypeScriptUnresolvedVariable
        window.grecaptcha.reset();
    };
    ReCaptchaComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 're-captcha',
                    template: "\n    <div class=\"g-recaptcha\"\n      [attr.data-sitekey]=\"site_key\"\n      data-callback=\"verifyCallback\"\n      data-expired-callback=\"captchaExpiredCallback\">\n  </div>"
                },] },
    ];
    /** @nocollapse */
    ReCaptchaComponent.ctorParameters = [
        { type: core_1.NgZone, },
    ];
    ReCaptchaComponent.propDecorators = {
        'site_key': [{ type: core_1.Input },],
        'language': [{ type: core_1.Input },],
        'captchaResponse': [{ type: core_1.Output },],
        'captchaExpired': [{ type: core_1.Output },],
    };
    return ReCaptchaComponent;
}());
exports.ReCaptchaComponent = ReCaptchaComponent;
