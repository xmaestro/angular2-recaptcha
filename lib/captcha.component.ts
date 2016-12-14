import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    NgZone,
    ViewChild, ElementRef
} from '@angular/core';
import { ReCaptchaService } from "./captcha.service";

@Component({
    selector: 're-captcha',
    template: '<div #target></div>'
})

export class ReCaptchaComponent implements OnInit {

    @Input()
    site_key: string = null;
    @Input()
    theme = 'light';
    @Input()
    type = 'image';
    @Input()
    size = 'normal';
    @Input()
    tabindex = 0;
    /* Available languages: https://developers.google.com/recaptcha/docs/language */
    @Input()
    language: string = null;

    @Output()
    captchaResponse = new EventEmitter<string>();
    @Output()
    captchaExpired = new EventEmitter();

    @ViewChild('target') targetRef: ElementRef;
    widgetId: any = null;

    constructor(
        private _zone: NgZone,
        private _captchaService: ReCaptchaService) {
    }

    ngOnInit() {
        this._captchaService.getReady(this.language)
            .subscribe((ready) => {
                if (!ready)
                    return;
                //noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
                this.widgetId = (<any>window).grecaptcha.render(this.targetRef.nativeElement, {
                    'sitekey': this.site_key,
                    'theme': this.theme,
                    'type': this.type,
                    'size': this.size,
                    'tabindex': this.tabindex,
                    'callback': <any>((response: any) => this._zone.run(this.recaptchaCallback.bind(this, response))),
                    'expired-callback': <any>(() => this._zone.run(this.recaptchaExpiredCallback.bind(this)))
                });
            });
    }

    public reset() {
        if (this.widgetId === null)
            return;
        //noinspection TypeScriptUnresolvedVariable
        (<any>window).grecaptcha.reset(this.widgetId);
    }

    public getResponse(): String {
        if (this.widgetId === null)
            return null;
        //noinspection TypeScriptUnresolvedVariable
        return (<any>window).grecaptcha.getResponse(this.targetRef.nativeElement);
    }

    private recaptchaCallback(response: string) {
        this.captchaResponse.emit(response);
    }

    private recaptchaExpiredCallback() {
        this.captchaExpired.emit();
    }
}
