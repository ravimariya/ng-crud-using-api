import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = 'http://localhost:3000/api/v1'
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseURL+'/users');
  }

  getUser(user) {
    return this.http.get(this.baseURL+'/users/'+user);
  }

  createUser(user) {
    return this.http.post(this.baseURL+'/users', user);
  }

  updateUser(user) {
    return this.http.patch(this.baseURL+'/users/'+user.id, user);
  }

  destroyUser(user) {
    return this.http.delete(this.baseURL+'/users/'+user);
  }
}
