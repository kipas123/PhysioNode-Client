export class MessageWriteModel {
    public messageText: string;
    public iduser:number;
    public idailment: number;
   
    
       constructor(messageText: string, iduser:number, idailment:number){
           this.messageText = messageText;
           this.iduser = iduser;
           this.idailment = idailment;
       }
     }