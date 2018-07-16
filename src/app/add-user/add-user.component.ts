import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import { Observable, of } from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  model = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  createUser(user) {
    this.userService.createUser(user).subscribe(
      data => { return true },
      err => {console.error(err); return Observable.throw(err);}
     );
    this.router.navigate(['/']);
  }
}
