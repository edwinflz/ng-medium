import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reactive-form-advanced',
  templateUrl: './reactive-form-advanced.component.html',
  styleUrls: ['./reactive-form-advanced.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormAdvancedComponent  {

  constructor() { }

}
