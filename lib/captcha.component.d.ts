/// <reference types="core-js" />
import { OnInit, EventEmitter, NgZone, ElementRef } from '@angular/core';
import { ReCaptchaService } from "./captcha.service";
export declare class ReCaptchaComponent implements OnInit {
    private _zone;
    private _captchaService;
    site_key: string;
    theme: string;
    type: string;
    size: string;
    tabindex: number;
    language: string;
    captchaResponse: EventEmitter<string>;
    captchaExpired: EventEmitter<{}>;
    targetRef: ElementRef;
    widgetId: any;
    constructor(_zone: NgZone, _captchaService: ReCaptchaService);
    ngOnInit(): void;
    reset(): void;
    getResponse(): String;
    private recaptchaCallback(response);
    private recaptchaExpiredCallback();
}
