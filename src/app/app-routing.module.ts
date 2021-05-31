import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: ' ', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: DashboardComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
