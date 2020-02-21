import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = 
						[
							{path:"" ,redirectTo:"/home",pathMatch:"full"},
							{path:"home" ,component:HomeComponent},
							{path:"login" ,component:LoginComponent},
							{path:"login/:forgot_password" ,component:ForgotPasswordComponent},
							{path:"logout" ,component:LogoutComponent},
							{path:"signup" ,component:SignupComponent}
							
						];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
