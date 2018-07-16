import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from '../user.service';
import {User} from '../user';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public users;

  constructor(private userService: UserService) { }

  ngOnInit() { this.getUsers(); }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => { this.users = data.data},
      err => console.error(err),
      () => console.log('done loading users')
      );
  }

  destroyUser(user) {
    if (confirm('Are you sure you want to delete ' + user.attributes.first_name + '?')) {
      this.userService.destroyUser(user.id).subscribe(
        data => { this.getUsers(); return true;},
        err => {console.error(err); return Observable.throw(err);}      
      );
    }
  }
}
