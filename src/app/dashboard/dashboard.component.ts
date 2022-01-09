import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public name!: any
  public id!: any
  POSTS: any;
  USERS: any;
  page = 1;
  count = 0;
  tableSize = 10;
  // tableSizes = [3, 6, 9, 12];

  constructor(
    private router: Router,
    private authService: AuthService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.id = localStorage.getItem('id');
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postService.getAllPosts()
      .subscribe(
        response => {
          this.POSTS = response;
          console.log(response);
          this.postService.getAllUsers()
            .subscribe(
              response => {
                this.USERS = response;
                console.log(response);
              }
            )
        },
        error => {
          console.log(error);
        });
  }

  onTableDataChange(event){
    this.page = event;
    this.fetchPosts();
  }

  logout() {
    console.log('logout');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
