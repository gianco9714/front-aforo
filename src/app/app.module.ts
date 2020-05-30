import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './admin/layaouts/login/login.component';
import {LoginModule} from './admin/layaouts/login/login.module';
import { InputComponent } from '../shared/components/input/input.component';
import {SharedComponentsModule} from '../shared/components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    LoginModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
