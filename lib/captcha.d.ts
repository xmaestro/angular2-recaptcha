import { OnInit, NgZone } from '@angular/core';
export declare class ReCaptchaComponent implements OnInit {
    site_key: string;
    language: string;
    captchaResponse: any;
    captchaExpired: any;
    constructor(zone: NgZone);
    recaptchaCallback(response: string): void;
    recaptchaExpiredCallback(): void;
    ngOnInit(): void;
    static reset(): void;
}
