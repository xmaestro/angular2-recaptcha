import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    NgZone} from '@angular/core';

@Component({
    selector: 're-captcha',
    template: `
    <div class="g-recaptcha"
      [attr.data-sitekey]="site_key"
      data-callback="verifyCallback"
      data-expired-callback="captchaExpiredCallback">
  </div>`
})

export class ReCaptchaComponent implements OnInit {

    @Input()
    site_key: string = null;
    /* Available languages: https://developers.google.com/recaptcha/docs/language */
    @Input()
    language: string = null;

    @Output()
    captchaResponse: EventEmitter<string>;
    @Output()
    captchaExpired: EventEmitter<>;

    constructor(zone: NgZone) {
        window[<any>"verifyCallback"] = <any>((response: any) => zone.run(this.recaptchaCallback.bind(this, response)));
        window[<any>"captchaExpiredCallback"] = <any>(() => zone.run(this.recaptchaExpiredCallback.bind(this)));
        this.captchaResponse = new EventEmitter<string>();
    }

    recaptchaCallback(response: string) {
        this.captchaResponse.emit(response);
    }
    
    recaptchaExpiredCallback() {
        this.captchaExpired.emit();
    }

    ngOnInit() {
        var doc = <HTMLDivElement> document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = 'https://www.google.com/recaptcha/api.js' + (this.language ? '?hl=' + this.language : '');
        script.async = true;
        script.defer = true;
        doc.appendChild(script);
    }

    public static reset() {
        //noinspection TypeScriptUnresolvedVariable
        (<any>window).grecaptcha.reset();
    }
}
