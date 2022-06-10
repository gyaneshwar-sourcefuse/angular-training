import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  BASE_URL = 'https://jsonplaceholder.typicode.com/';
  constructor(
    private http: HttpClient
  ) { }

  posts(): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL + 'posts')
  }
}
