import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'a2reCaptcha',
    template: '<div class="g-recaptcha" [attr.data-sitekey]="site_key" data-callback="verifyCallback"></div>'
})

/*Captcha functionality component*/
export class A2ReCaptcha implements OnInit {

@Input()
    site_key:string = null;

    @Output()
    captchaValidated:EventEmitter<boolean>;

    constructor() {

        window['verifyCallback'] = this.recaptchaCallback.bind(this);

        this.captchaValidated = new EventEmitter();

        this.captchaValidated.emit(false);

    }

    recaptchaCallback() {

        this.captchaValidated.emit(true);

    }

    /*Display captcha form/image*/
    showCaptcha() {

        var doc = <HTMLDivElement> document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        doc.appendChild(script);

    }

    ngOnInit() {

        this.showCaptcha();

    }
}
