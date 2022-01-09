import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const endpoint = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.http.get(endpoint + 'posts');
  }

  getAllUsers(): Observable<any> {
    return this.http.get(endpoint + 'users');
  }

  getDetailPost(id): Observable<any> {
    return this.http.get(endpoint + 'posts/' + id);
  }

}
