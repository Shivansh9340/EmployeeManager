import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  private apiServerUrl = environment.apiBaseUrl;
  errorMessage: string = '';
  formSubmitted = false;
  form: FormGroup;
  name: any;
  email: any;
  password: any;
  

  constructor(private router: Router,private http: HttpClient) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'jobTitle': new FormControl('', Validators.required),
      'phone': new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSignup() {
  this.formSubmitted = true;

  if (this.form.valid) {
    const formData = {
      name: this.name,
      email: this.email,
      password: this.password
    }; 

    this.http.post(`${this.apiServerUrl}/employee/all`, formData).subscribe(
      (response) => {
        console.log('Form submitted successfully!', response);
        this.router.navigate(['/view-employees']);
      },
      (error) => {
        console.error('Error submitting form:', error);
        this.errorMessage = 'An error occurred while submitting the form.';
      }
    );
  } else {
    console.log('Form is invalid!');
    console.log(this.form);

    this.errorMessage = 'Please fill all the fields.';
  }
}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}