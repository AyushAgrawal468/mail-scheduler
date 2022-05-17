import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "home",
    component: LoginPageComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
    {
      path:"",
      redirectTo:"login",
      pathMatch:"full"
    }]
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "mainInterface",
    component: MainInterfaceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
