export class Mygroup {
    public idMygroup: number;
    public mygroupName: string;
    public mygroupDescription: string;
    public mygroupOwner: string;



    constructor(idMygroup: number, mygroupName: string, mygroupDescription: string, mygroupOwner: string) {
        this.idMygroup = idMygroup;
        this.mygroupName = mygroupName;
        this.mygroupDescription = mygroupDescription;
        this.mygroupOwner = mygroupOwner;
    }

}