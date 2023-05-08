import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ViewEmployeesComponent } from "./view-employees/view-employees.component";


const routes : Routes=[
    {path:'',redirectTo:'/signup', pathMatch:'full'},
    //{path:'/login/signup',redirectTo:'/signup', pathMatch:'full'},
    {path :'login', component: LoginComponent},
    {path :'signup', component: SignupComponent},
    {path: 'view-employees', component: ViewEmployeesComponent}
    ]

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports:[RouterModule]
    })
    export class AppRoutingModule{
        
    }