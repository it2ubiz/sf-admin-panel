import {Component, Input} from '@angular/core';
import {UserDeviceService} from 'app/services/userdevices.service';

@Component({
	selector: 'user-devices',
    templateUrl: '../userdevices.tpl.html'
})

export class UserDevicesComponent {
    title = 'User Devices:';
    users: any = []; 
    constructor(private userDeviceService: UserDeviceService) {
        userDeviceService.getUserDevices().subscribe(users => {
          this.users = users;
          console.log(this.users);
        });
    }
}