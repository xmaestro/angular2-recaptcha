/// <reference types="core-js" />
import { NgZone } from "@angular/core";
import { Observable } from "rxjs";
export declare class ReCaptchaService {
    private scriptLoaded;
    private readySubject;
    constructor(zone: NgZone);
    getReady(language: String): Observable<boolean>;
    private onloadCallback();
}
