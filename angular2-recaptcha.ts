import { NgModule } from '@angular/core';
import { ReCaptchaComponent } from "./lib/captcha.component";
import { ReCaptchaService } from "./lib/captcha.service";

@NgModule({
    declarations: [ReCaptchaComponent],
    exports: [ReCaptchaComponent],
    providers: [ReCaptchaService]
})
export class ReCaptchaModule {}
