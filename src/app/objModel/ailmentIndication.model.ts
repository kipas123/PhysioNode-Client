export class AilmentIndication {
    public idailmentIndication: number;
    public indicationDescription: string;
    public indicationHeader: string;


    constructor(idailmentIndication: number, indicationDescription: string, indicationHeader: string) {
        this.idailmentIndication = idailmentIndication;
        this.indicationDescription = indicationDescription;
        this.indicationHeader = indicationHeader;
    }
}