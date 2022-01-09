import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public name!: any
  public id!: any
  USER: any;

  constructor(
    private actRoute: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.id = localStorage.getItem('id');
    let userid = this.actRoute.snapshot.params.id;
    console.log(userid);
    this.fetchPost(userid);
  }

  fetchPost(userid): void {
    this.userService.getProfile(userid)
      .subscribe(
        response => {
          this.USER = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
