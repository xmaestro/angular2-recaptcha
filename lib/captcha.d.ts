import { OnInit, EventEmitter, NgZone } from '@angular/core';
export declare class ReCaptchaComponent implements OnInit {
    site_key: string;
    language: string;
    captchaResponse: EventEmitter<string>;
    captchaExpired: EventEmitter<{}>;
    constructor(zone: NgZone);
    recaptchaCallback(response: string): void;
    recaptchaExpiredCallback(): void;
    ngOnInit(): void;
    static reset(): void;
}
