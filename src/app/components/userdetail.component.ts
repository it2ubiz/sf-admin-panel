import {Component, Input} from '@angular/core';
import {UserService} from 'app/services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'user-detail',
    templateUrl: '../userdetail.tpl.html'
})

export class UserDetailComponent {
    title = 'User Info';
    user; 
    constructor(
        private route: ActivatedRoute,
        private service: UserService
      ) 
      {
        let id = this.route.snapshot.paramMap.get('id');        
        this.service.getUserInfo(id).subscribe(users => {
            this.user = users;            
          });
      }
}