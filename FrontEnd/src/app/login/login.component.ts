
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username: string;
    password: string;
    email:string;
    errorMessage: string;

    constructor(private router: Router,private authService: AuthService) { }

    onLogin() {
        this.authService.login(this.password)
          .subscribe(result => {
            if (result === true) {
              // redirect to home page on successful login
              this.router.navigate(['/home']);
            } else {
              this.errorMessage = 'Invalid credentials';
            }
          });
      }
    goToSignup() {
        this.router.navigate(['/signup']);
      }
}