import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import { Observable, of } from 'rxjs';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public user = new User();
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.userService.getUser(this.route.params._value.id).subscribe(
      data => { this.user = data.user; return true;},
      err => {console.error(err); return Observable.throw(err);}
    );
  }

  updateUser(user) {
    this.userService.updateUser(user).subscribe(
      data => { return true },
      err => {console.error(err); return Observable.throw(err);}
    );
    this.router.navigate(['/']);
  }
}
