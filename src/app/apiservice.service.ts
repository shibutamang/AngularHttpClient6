import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  URL = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return  this.http.get(this.URL);
  }
}
