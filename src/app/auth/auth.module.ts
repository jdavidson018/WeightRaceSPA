import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { NbCheckboxModule, NbButtonModule, NbInputModule, NbAlertModule, NbDatepickerModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAuthModule } from '@nebular/auth';

const AUTH_COMPONENTS = [
  AuthComponent,
  LoginpageComponent,
  RegisterpageComponent
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    ThemeModule,
    NbAuthModule,
    NbDatepickerModule
  ],
  declarations: [
    ...AUTH_COMPONENTS
  ]
})
export class AuthModule { }
