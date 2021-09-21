import { UserWriteModel } from "../user/userWriteMode.model";

export class MygroupWriteModel {
    public idmygroup: number;
    public mygroupName: string;
    public mygroupDescription: string;
    public mygroupOwner: UserWriteModel;



    constructor(idmygroup: number, mygroupName: string, mygroupDescription: string, mygroupOwner: UserWriteModel) {
        this.idmygroup = idmygroup;
        this.mygroupName = mygroupName;
        this.mygroupDescription = mygroupDescription;
        this.mygroupOwner = mygroupOwner;
    }

}