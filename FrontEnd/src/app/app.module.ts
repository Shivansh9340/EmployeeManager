import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes } from '@angular/router';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AppRoutingModule } from './app.routing';


const routes : Routes=[
{path:'',redirectTo:'/signup', pathMatch:'full'},
//{path:'/login/signup',redirectTo:'/signup', pathMatch:'full'},
{path :'login', component: LoginComponent},
{path :'signup', component: SignupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ViewEmployeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
