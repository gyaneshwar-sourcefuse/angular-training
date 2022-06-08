import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  BASE_URL = 'https://jsonplaceholder.typicode.com/';
  constructor(
    private http: HttpClient
  ) { }

  posts() {
    return this.http.get(this.BASE_URL + 'posts')
  }
}
