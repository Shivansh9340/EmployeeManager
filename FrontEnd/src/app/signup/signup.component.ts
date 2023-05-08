import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  // let name: string = '';
  // let email: string = '';
  // let jobTitle: string = '';
  // let phone: number = null;
  // let password: string = '';
  errorMessage: string = '';
  formSubmitted = false;
  form: FormGroup;

  constructor(private router: Router) {

  }
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
    // perform signup logic here
    this.formSubmitted = true;
    if (this.form.valid) {
      console.log('Form submitted successfully!');
      this.router.navigate(['/view-employees']);
      // perform form submission logic here
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