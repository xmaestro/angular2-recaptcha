# Angular 2 : Typescript component for Google reCaptcha 2

This is just very simple Angular 2 component that implements Google [reCaptcha 2](https://www.google.com/recaptcha/intro/index.html).

Installation
--------------------------------------

Install it from npm:

```bash
npm angular2-recaptcha
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

```bash
import {A2ReCaptcha} from 'angular2-recaptcha/angular2-recaptcha';
```

```bash
 ...
@Component({
  directives: [A2ReCaptcha]
  })
  ...
```

### View

Use in template like below

```bash
 <a2reCaptcha [site_key]="<GOOGLE_RECAPTCHA_KEY>"></a2reCaptcha>
```

Where **site_key** is the Google reCaptcha private key.

## Callback

To catch the success callback, you will need to subscribe to `captchaValidated` event. Llike so:

```bash
<a2reCaptcha (captchaValidated)="handleCorrectCaptcha()" [site_key]="<GOOGLE_RECAPTCHA_KEY>"></a2reCaptcha>
```
