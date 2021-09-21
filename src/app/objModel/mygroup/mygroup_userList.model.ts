export class UserList {
 public userId: number;
 public userName: string;
 public userSurname: string;
 public userRole: string;

 
    constructor(id: number,userName: string, userSurname: string, userRole: string){
      this.userId = id;
      this.userName = userName;
      this.userSurname = userSurname;
      this.userRole = userRole;
    }
  }