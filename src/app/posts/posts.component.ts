import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public name!: any
  public id!: any
  POST: any;

  constructor(
    private actRoute: ActivatedRoute,
    private authService: AuthService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.id = localStorage.getItem('id');
    let postid = this.actRoute.snapshot.params.id;
    console.log(postid);
    this.fetchPost(postid);
  }

  fetchPost(postid): void {
    this.postService.getDetailPost(postid)
      .subscribe(
        response => {
          this.POST = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
