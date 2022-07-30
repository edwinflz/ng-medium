import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorContainerComponent } from './form-error-container/form-error-container.component';
import { FormErrorMsgComponent } from './form-error-msg/form-error-msg.component';
import { DoesntContainNTildeDirective } from './validators/doesnt-contain-ntilde.validator';

@NgModule({
  declarations: [
    FormErrorMsgComponent,
    FormErrorContainerComponent,
    DoesntContainNTildeDirective,
  ],
  imports: [CommonModule],
  exports: [
    FormErrorMsgComponent,
    FormErrorContainerComponent,
    DoesntContainNTildeDirective,
  ],
})
export class FormExtensionsModule {}
