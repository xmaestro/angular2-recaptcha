import { NgModule } from '@angular/core';
import { ReCaptchaComponent } from "./lib/captcha.component";
import { ReCaptchaService } from "./lib/captcha.service";

@NgModule({
    declarations: [ReCaptchaComponent],
    exports: [ReCaptchaComponent]
})
export class ReCaptchaModule {}

@NgModule({
    providers: [ReCaptchaService]
})
export class ReCaptchaServiceModule {}
