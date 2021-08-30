export class User {
 public userId: number;
 public userName: string;
 public userSurname: string;
 public userEmail: string;

 
    constructor(userName: string, userSurname: string, userEmail: string, id: number){
      this.userName = userName;
      this.userEmail = userEmail;
      this.userId = id;
      this.userSurname = userSurname;
    }
  }