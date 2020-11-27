import { Injectable, NgZone, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/*
 * Common service shared by all reCaptcha component instances
 * through dependency injection.
 * This service has the task of loading the reCaptcha API once for all.
 * Only the first instance of the component creates the service, subsequent
 * components will use the existing instance.
 *
 * As the language is passed to the <script>, the first component
 * determines the language of all subsequent components. This is a limitation
 * of the present Google API.
 */
@Injectable()
export class ReCaptchaService {

    private scriptLoaded = false;
    private readySubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(zone: NgZone) {
        /* the callback needs to exist before the API is loaded */
		if (typeof window != 'undefined') {
			window[<any>"reCaptchaOnloadCallback"] = <any>(() => zone.runOutsideAngular(this.onloadCallback.bind(this)));
		}
    }

    public getReady(language: string, global: boolean, scriptUrl: string): Observable<boolean> {
        if (!this.scriptLoaded) {
            if (global == true){
                scriptUrl = 'www.recaptcha.net'
            }
            this.scriptLoaded = true;
            let doc = <HTMLDivElement>document.body;
            let script = document.createElement('script');
            script.innerHTML = '';
            script.src = `https://${scriptUrl}/recaptcha/api.js?onload=reCaptchaOnloadCallback&render=explicit` +
                (language ? '&hl=' + language : '');
            script.async = true;
            script.defer = true;
            doc.appendChild(script);
        }
        return this.readySubject.asObservable();
    }

    private onloadCallback() {
        this.readySubject.next(true);
    }
}

/* singleton pattern taken from https://github.com/angular/angular/issues/13854 */
export function RECAPTCHA_SERVICE_PROVIDER_FACTORY(ngZone: NgZone, parentDispatcher: ReCaptchaService) {
    return parentDispatcher || new ReCaptchaService(ngZone);
}

export const RECAPTCHA_SERVICE_PROVIDER = {
    provide: ReCaptchaService,
    deps: [NgZone, [new Optional(), new SkipSelf(), ReCaptchaService]],
    useFactory: RECAPTCHA_SERVICE_PROVIDER_FACTORY
};
