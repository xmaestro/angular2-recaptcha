import { NgModule } from '@angular/core';
import { ReCaptchaComponent } from "./lib/captcha.component";
import { RECAPTCHA_SERVICE_PROVIDER } from "./lib/captcha.service";

@NgModule({
    declarations: [ReCaptchaComponent],
    exports: [ReCaptchaComponent],
    providers: [RECAPTCHA_SERVICE_PROVIDER]
})
export class ReCaptchaModule {}

export * from './lib/captcha.component';
