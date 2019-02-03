import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [{
    path: '',
    component: LoginpageComponent
  },
  {
    path: 'register',
    component: RegisterpageComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
