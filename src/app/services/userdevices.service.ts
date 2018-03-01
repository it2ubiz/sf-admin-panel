import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserDevices } from "app/models/userdevices";
 
@Injectable()
export class UserDeviceService {
   constructor(private http: Http) {
   } 
   getUserDevices(): Observable<UserDevices[]> {
      return this.http.get("http://localhost:3000/test")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}