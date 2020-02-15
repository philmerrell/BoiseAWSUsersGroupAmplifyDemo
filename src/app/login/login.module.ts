import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { AmplifyAngularModule, AmplifyIonicModule } from 'aws-amplify-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmplifyAngularModule,
    AmplifyIonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
