import { NgModule } from '@angular/core';
import { ReCaptchaComponent } from "./lib/captcha";

@NgModule({
    declarations: [ReCaptchaComponent],
    exports: [ReCaptchaComponent]
})
export class ReCaptchaModule {}
