"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ReCaptchaComponent.prototype, "site_key", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ReCaptchaComponent.prototype, "language", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ReCaptchaComponent.prototype, "captchaResponse", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ReCaptchaComponent.prototype, "captchaExpired", void 0);
    ReCaptchaComponent = __decorate([
        core_1.Component({
            selector: 're-captcha',
            template: "\n    <div class=\"g-recaptcha\"\n      [attr.data-sitekey]=\"site_key\"\n      data-callback=\"verifyCallback\"\n      data-expired-callback=\"captchaExpiredCallback\">\n  </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.NgZone !== 'undefined' && core_1.NgZone) === 'function' && _a) || Object])
    ], ReCaptchaComponent);
    return ReCaptchaComponent;
    var _a;
}());
exports.ReCaptchaComponent = ReCaptchaComponent;
