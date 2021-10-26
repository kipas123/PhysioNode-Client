
export class PasswordResetModel{
    public token: String;
    public password: String;

    constructor(token: String, password: String){
        this.token = token;
        this.password = password;
    }

}