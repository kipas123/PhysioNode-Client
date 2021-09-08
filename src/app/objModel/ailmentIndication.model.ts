import { Ailment } from "./ailment.model";

export class AilmentIndication {
    public idailmentIndication: number;
    public indicationDescription: string;
    public indicationHeader: string;
    public ailmentId: number;


    constructor(idailmentIndication: number, indicationHeader: string, indicationDescription: string, ailmentId: number) {
        this.idailmentIndication = idailmentIndication;
        this.indicationDescription = indicationDescription;
        this.indicationHeader = indicationHeader;
        this.ailmentId = ailmentId;
    }
}