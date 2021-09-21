export class AilmentWriteModel {
    public ailmentDescription: string;
    public ailmentName: string;
    public user: number;
    public attendingphysician: number;


    constructor(ailmentDescription: string, ailmentName: string, user: number, attendingphysician: number) {
        this.ailmentDescription = ailmentDescription;
        this.ailmentName = ailmentName;
        this.user = user;
        this.attendingphysician = attendingphysician;
    }
}