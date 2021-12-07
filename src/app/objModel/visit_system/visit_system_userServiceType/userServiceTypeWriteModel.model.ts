import { UserReadModel } from "app/objModel/user/userReadModel.model";

export class UserServiceTypeWriteModel{
    private userServiceTypeName: String;
    private userServiceTypeDurationInMinute: number;
    private userId: number;
    
    
    constructor(userServiceTypeName: String, userServiceTypeDurationInMinute: number,userId: number){
        this._userServiceTypeName = userServiceTypeName;
        this._userServiceTypeDurationInMinute = userServiceTypeDurationInMinute;
        this.userId = userId;
    }
    
    public get _userServiceTypeName(): String {
        return this.userServiceTypeName;
    }
    public set _userServiceTypeName(value: String) {
        this.userServiceTypeName = value;
    }
    
    public get _userId(): number {
        return this.userId;
    }
    public set _userId(value: number) {
        this.userId = value;
    }
    
    public get _userServiceTypeDurationInMinute(): number {
        return this.userServiceTypeDurationInMinute;
    }
    public set _userServiceTypeDurationInMinute(value: number) {
        this.userServiceTypeDurationInMinute = value;
    }
    
}