import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedComponentsModule} from '../../../../shared/components/shared-components.module';



@NgModule({
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ]
})
export class LoginModule { }
