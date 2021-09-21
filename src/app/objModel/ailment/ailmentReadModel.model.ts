import { AilmentFilepath } from "./ailmentFilepaths.model";
import { AilmentIndication } from "./ailmentIndication.model";
import { AilmentNote } from "./ailmentNote.model";

export class AilmentReadModel {
    public idailment: number;
    public ailmentDescription: string;
    public ailmentName: string;
    public ailmentNotes: AilmentNote[];
    public ailmentIndications: AilmentIndication[];
    public ailmentFilepaths: AilmentFilepath[];
    public attendingphysician: string;


    constructor(idailment: number, ailmentDescription: string, ailmentName: string, ailmentNotes: AilmentNote[], ailmentIndication: AilmentIndication[], ailmentFilepaths: AilmentFilepath[], attendingphysician: string) {
        this.idailment = idailment;
        this.ailmentDescription = ailmentDescription;
        this.ailmentName = ailmentName;
        this.ailmentNotes = ailmentNotes;
        this.ailmentIndications = ailmentIndication;
        this.ailmentFilepaths = ailmentFilepaths;
        this.attendingphysician = attendingphysician;
    }
}