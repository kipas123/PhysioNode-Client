export class MessageWriteModel {
    private messageText: string;
    private iduser: number;
    private idmessageRoom: number;
    
    
    constructor(messageText: string, iduser:number, idmessageRoom:number){
        this.messageText = messageText;
        this.iduser = iduser;
        this.idmessageRoom = idmessageRoom;
    }
    public get _messageText(): string {
        return this.messageText;
    }
    public set _messageText(value: string) {
        this.messageText = value;
    }
    public get _iduser(): number {
        return this.iduser;
    }
    public set _iduser(value: number) {
        this.iduser = value;
    }
    public get _idmessageRoom(): number {
        return this.idmessageRoom;
    }
    public set _idmessageRoom(value: number) {
        this.idmessageRoom = value;
    }
}