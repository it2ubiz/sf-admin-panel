import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import {UserDevicesComponent} from 'app/components/userdevices.component';
import {UserDeviceService} from 'app/services/userdevices.service'
import {UserComponent} from 'app/components/user.component';
import {UserDetailComponent} from 'app/components/userdetail.component';
import {UserService} from 'app/services/user.service'

const appRoutes: Routes = [{ path: 'devices',	component: UserDevicesComponent	},
{ path: 'users',	component: UserComponent	},
{ path: 'user/:id',	component: UserDetailComponent}]

@NgModule({
  declarations: [
    AppComponent,
    UserDevicesComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )    
  ],
  providers: [UserDeviceService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
