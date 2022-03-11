export class PasswordChangeModel{
    private userId: number;
    private oldPassword: String;
    private newPassword: String;
    
    constructor(userId: number, oldPassword: String, newPassword: String){
        this._userId = userId;
        this._oldPassword = oldPassword;
        this._newPassword = newPassword;
    }
    
    public get _userId(): number {
        return this.userId;
    }
    public set _userId(value: number) {
        this.userId = value;
    }
    public get _newPassword(): String {
        return this.newPassword;
    }
    public set _newPassword(value: String) {
        this.newPassword = value;
    }
    public get _oldPassword(): String {
        return this.oldPassword;
    }
    public set _oldPassword(value: String) {
        this.oldPassword = value;
    }
}