# Angular 2 : Typescript component for Google reCaptcha 2

This is just very simple Angular 2 component that implements Google [reCaptcha 2](https://www.google.com/recaptcha/intro/index.html).

Installation
--------------------------------------

Install it from npm:

```bash
npm install angular2-recaptcha
```

Usage
--------------------------------------

### SystemJs config

```js
System.config({
            map: {
                'angular2-recaptcha': 'node_modules/angular2-recaptcha'
            },
            packages: {
                app: {
                    format: 'register',
                    defaultExtension: 'js'
                },
                'angular2-recaptcha': {defaultExtension: 'js'}
            }
        });
```

### Component

```typescript
import {ReCaptchaComponent} from 'angular2-recaptcha/angular2-recaptcha';
```

```typescript
 ...
@Component({
  directives: [ReCaptchaComponent]
  })
  ...
```

### View

Use in template like below

```html
 <re-captcha [site_key]="'<GOOGLE_RECAPTCHA_KEY>'"></re-captcha>
```

Where **site_key** is the Google reCaptcha private key.

## Callback

To catch the success callback, you will need to subscribe to `captchaValidated` event. The response token will be passed in the `$event` parameter.

```html
<re-captcha (captchaValidated)="handleCorrectCaptcha($event)" [site_key]="'<GOOGLE_RECAPTCHA_KEY>'"></re-captcha>
```
