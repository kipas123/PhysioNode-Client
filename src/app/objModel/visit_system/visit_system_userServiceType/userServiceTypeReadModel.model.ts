export class UserServiceTypeReadModel{
    private idUserServiceType: number;
    private userServiceTypeName: String;
    private userServiceTypeDuration: Date;


    constructor(idUserServiceType: number, userServiceType_name: String, userServiceType_duration: Date){
        this.idUserServiceType = idUserServiceType;
        this.userServiceTypeName = userServiceType_name;
        this.userServiceTypeDuration = userServiceType_duration;
    }


    public get _idUserServiceType(): number {
        return this.idUserServiceType;
    }
    public set _idUserServiceType(value: number) {
        this.idUserServiceType = value;
    }
    public get _userServiceType_name(): String {
        return this.userServiceTypeName;
    }
    public set _userServiceType_name(value: String) {
        this.userServiceTypeName = value;
    }
    public get _userServiceType_duration(): Date {
        return this.userServiceTypeDuration;
    }
    public set _userServiceType_duration(value: Date) {
        this.userServiceTypeDuration = value;
    }
    
}