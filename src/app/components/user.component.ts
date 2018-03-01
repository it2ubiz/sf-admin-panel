import {Component, Input} from '@angular/core';
import {UserService} from 'app/services/user.service';

@Component({
	selector: 'user-list',
    templateUrl: '../userlist.tpl.html'
})

export class UserComponent {
    title = 'User list';
    users: any = []; 
    constructor(private userService: UserService) {
        userService.getUserList().subscribe(users => {
          this.users = users;
          console.log(this.users);
        });
    }
}