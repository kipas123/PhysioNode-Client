import { UserRole } from "./userRole.model";

export class UserReadModel {
 public userId: number;
 public userEmail: string;
 public userName: string;
 public userSurname: string;
 public userRoleDTO: UserRole;
 public userDob: Date;
 public token:String;

 
    constructor(id: number, userEmail: string,userName: string, userSurname: string, userRoleDTO: UserRole, userDob: Date, token: string){
      this.userId = id;
      this.userEmail = userEmail;
      this.userName = userName;
      this.userSurname = userSurname;
      this.userRoleDTO = userRoleDTO;
      this.userDob=userDob;
      this.token=token;
    }
  }