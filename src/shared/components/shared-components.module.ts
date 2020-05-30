import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ReactiveFormsModule} from '@angular/forms';
import {InputModule} from './input/input.module';

@NgModule({
  imports: [
    CommonModule,
    InputModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  exports: [
    InputModule,
  ],
  entryComponents: [

  ],
  declarations: [
]
})
export class SharedComponentsModule {
}
