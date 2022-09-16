import {
  DomSanitizer,SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl,
} from '@angular/platform-browser';

export interface SafeDOM {
  html: (value: any, sanitizer: DomSanitizer) => SafeHtml;
  style: (value: any, sanitizer: DomSanitizer) => SafeStyle;
  script: (value: any, sanitizer: DomSanitizer) => SafeScript;
  url: (value: any, sanitizer: DomSanitizer) => SafeUrl;
  resourceUrl: (value: any, sanitizer: DomSanitizer) => SafeResourceUrl;
}

export const SAFES: SafeDOM = {
  html: (value, sanitizer) => {
    return sanitizer.bypassSecurityTrustHtml(value);
  },
  style: (value, sanitizer) => {
    return sanitizer.bypassSecurityTrustHtml(value);
  },
  script: (value, sanitizer) => {
    return sanitizer.bypassSecurityTrustHtml(value);
  },
  url: (value, sanitizer) => {
    return sanitizer.bypassSecurityTrustHtml(value);
  },
  resourceUrl: (value, sanitizer) => {
    return sanitizer.bypassSecurityTrustHtml(value);
  }
};
