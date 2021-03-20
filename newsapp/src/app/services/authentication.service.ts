import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface LoginForm {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
    login(loginForm: LoginForm) {
      return this.post<ay>('api/users/login', {email, loginForm.email, password: loginForm.password}).pipe(
        map((token) => {
          console.log('token');
          localStorage.setItem('blog-token', token.access_token);
          return token;
        })
      )
    }
   }
}
