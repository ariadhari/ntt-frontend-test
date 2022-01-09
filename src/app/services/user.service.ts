import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const endpoint = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getProfile(id): Observable<any> {
    return this.http.get(endpoint + 'users/' + id);
  }
}
