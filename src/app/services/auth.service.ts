import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  logout(): void {
    localStorage.setItem("isLoggedIn", 'false');
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("token");
  }
}