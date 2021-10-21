import { UserReadModel } from "../user/userReadModel.model";

export class MessageReadModel {
    public idmessage: number;
    public messageText: string;
    public postDate: Date;
    public messageOwner:UserReadModel;
    public idailment: number;
   
    
       constructor(idmessage: number, messageText: string, postDate: Date, messageOwner:UserReadModel, idailment:number){
           this.idmessage = idmessage;
           this.messageText = messageText;
           this.postDate = postDate;
           this.messageOwner = messageOwner;
           this.idailment = idailment;
       }
     }