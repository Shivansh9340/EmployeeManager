import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(password: string): Observable<boolean> {
    // implement your login logic here
    return of(true); // replace this with your actual login logic
  }
}