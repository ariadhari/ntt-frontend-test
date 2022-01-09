import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('isLoggedIn'));
    console.log(localStorage.getItem('name'));
    console.log(localStorage.getItem('token'));
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
    this.authService.logout();
  }

  login() {
    if (this.loginForm.valid) {
      this.http.get<any>("https://jsonplaceholder.typicode.com/users")
      .subscribe(res => {
        const user = res.find((a:any) => {
          return a.username === this.loginForm.value.username && a.username === this.loginForm.value.password
        });
        console.log(user);

        if (user) {
          alert("Login success")
          this.loginForm.reset()
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('id', user.id);
          localStorage.setItem('name', user.name);
          localStorage.setItem('token', btoa(user.email));
          this.router.navigate(['dashboard'])
        } else {
          alert("User not found")
        }
      }, err => {
        alert("Something went wrong!")
      })
    } else {
      console.log(this.loginForm.value)
      return
    }
  }

}
