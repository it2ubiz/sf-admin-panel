import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from "app/models/user";
 
@Injectable()
export class UserService {
   constructor(private http: Http) {
   } 
   getUserList(): Observable<User[]> {
      return this.http.get("http://localhost:3000/ulist")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

   getUserInfo(uid): Observable<User[]> {
    return this.http.get("http://localhost:3000/uinfo/"+uid)
       .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
 }
}