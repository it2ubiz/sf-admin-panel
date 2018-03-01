export class UserDevices {
    constructor(
       public GUID: string,
       public userID: string,
       public deviceID: string,
       public token: string,
       public locked: string,
       public nopush:boolean
    ) {}
 }