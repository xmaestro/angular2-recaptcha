import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    NgZone} from '@angular/core';

@Component({
    selector: 're-captcha',
    template: '<div class="g-recaptcha" [attr.data-sitekey]="site_key" data-callback="verifyCallback"></div>'
})

export class ReCaptchaComponent implements OnInit {

    @Input()
    site_key:string = null;

    @Output()
    captchaResponse:EventEmitter<string>;

    constructor(zone: NgZone) {
        window[<any>"verifyCallback"] = <any>((response: any) => zone.run(this.recaptchaCallback.bind(this, response)));
        this.captchaResponse = new EventEmitter<string>();
    }

    recaptchaCallback(response: string) {
        this.captchaResponse.emit(response);
    }

    ngOnInit() {
        var doc = <HTMLDivElement> document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        doc.appendChild(script);
    }
}
