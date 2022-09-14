import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { BreakPointsService } from '@reactive-form-advanced/service/break-points.service';
import { expiredCardDateValidator } from './validators/expired-card-date.validator';
import { REGEX } from '@reactive-form-advanced/constants/regex.contants';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private breakPointsService: BreakPointsService,
    private formBuilder: FormBuilder,) {}

  ngOnInit(): void {
    this.buildForm();
  }

  get breakPointObserver$(): Observable<number> {
    return this.breakPointsService.breakPointObserver$;
  }

  getFormControl(control: string): AbstractControl | null {
    return this.form.get(control);
  }

  something(): void {
    console.log('submit!!!');
  }

  clear(): void {
    this.form.reset();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      payerName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(REGEX.ALPHA)]],
      payerlastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(REGEX.ALPHA)]],
      address: ['', [Validators.required, Validators.maxLength(100)]],
      country: [null, [Validators.required]],
      state: ['', [Validators.required, Validators.pattern(REGEX.ALPHANUMERIC)]],
      payerEmail: ['', [Validators.required, Validators.email]],
      postalCode: ['', [Validators.required, Validators.minLength(3)]],
      cardNumber: ['', [Validators.required, Validators.maxLength(19)]],
      expiredDate: ['', [Validators.required, Validators.pattern(REGEX.EXPIRATION_CARD), expiredCardDateValidator()]],
      maskedCVV: ['', [Validators.required, Validators.maxLength(4)]],
      payerDocument: ['', [Validators.required, Validators.pattern(REGEX.NUMERIC)]],
    });
  }


}
