import { AilmentFilepath } from "./ailmentFilepaths.model";
import { AilmentIndication } from "./ailmentIndication.model";
import { AilmentNote } from "./ailmentNote.model";

export class Ailment {
    public idailment: number;
    public ailmentDescription: string;
    public ailmentName: string;
    public ailmentNotes: AilmentNote[];
    public ailmentIndications: AilmentIndication[];
    public ailmentFilepaths: AilmentFilepath[];


    constructor(idailment: number, ailmentDescription: string, ailmentName: string, ailmentNotes: AilmentNote[], ailmentIndication: AilmentIndication[], ailmentFilepaths: AilmentFilepath[]) {
        this.idailment = idailment;
        this.ailmentDescription = ailmentDescription;
        this.ailmentName = ailmentName;
        this.ailmentNotes = ailmentNotes;
        this.ailmentIndications = ailmentIndication;
        this.ailmentFilepaths = ailmentFilepaths;
    }
}