import { UserRole } from "./userRole.model";

export class UserWriteModel {
 public userId: number;
 public userPassword: string;
 public userName: string;
 public userSurname: string;
 public userEmail: string;
 public userDob: Date;

 
    constructor( id: number, userEmail: string, userPassword: string, userName: string, userSurname: string, userDob: Date,){
      this.userId = id;
      this.userEmail = userEmail;
      this.userPassword = userPassword;
      this.userName = userName;
      this.userSurname = userSurname;
      this.userDob=userDob;
    }
  }