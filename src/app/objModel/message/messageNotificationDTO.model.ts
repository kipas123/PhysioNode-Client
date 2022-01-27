import { UserReadModel } from "../user/userReadModel.model";

export class MessageNotificationDTO{
    private idMessageNotification: number;
    private userSender: UserReadModel;
    private postDate: Date;
    
    
    constructor(idMessageNotification:number, userSender:UserReadModel, postDate:Date){
        this._idMessageNotification = idMessageNotification;
        this._userSender = userSender;
        this._postDate = postDate;
    }
    
    public get _userSender(): UserReadModel {
        return this.userSender;
    }
    public set _userSender(value: UserReadModel) {
        this.userSender = value;
    }
    public get _postDate(): Date {
        return this.postDate;
    }
    public set _postDate(value: Date) {
        this.postDate = value;
    }
    public get _idMessageNotification(): number {
        return this.idMessageNotification;
    }
    public set _idMessageNotification(value: number) {
        this.idMessageNotification = value;
    }
}