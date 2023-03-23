import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './page/form/form.component';

//routrt authentication
import { LoginEnpIdComponent } from './authentication/login-enp-id/login-enp-id.component';
import { WaitVerifyComponent } from './page/wait-verify/wait-verify.component';

const routes: Routes = [
  { component: LoginEnpIdComponent, path: 'login' },
  { component: RegisterComponent, path: 'register' },
  { component: WaitVerifyComponent, path: 'wait-verify' },
  { component: HomeComponent, path: '', canActivate: [AuthGuard] },
  { component: UserComponent, path: 'user', canActivate: [AuthGuard] },
  {
    component: UserDashboardComponent,
    path: 'user/profile',
    canActivate: [AuthGuard],
  },
  { component: FormComponent, path: 'form', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
