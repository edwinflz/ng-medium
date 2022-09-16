import { Pipe, PipeTransform } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeStyle,
  SafeScript,
  SafeUrl,
  SafeResourceUrl,
} from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { SafeDOM, SAFES } from './constants/safe.constants';
@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer, private toastr: ToastrService) {}

  transform(
    value: any,
    type: string
  ): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    const safe = SAFES[type as keyof SafeDOM];
    if (safe) return safe(value, this.sanitizer);
    const error = `Invalid safe type specified: ${type}`;
    this.toastr.error(error);
    throw new Error(error);
  }
}
