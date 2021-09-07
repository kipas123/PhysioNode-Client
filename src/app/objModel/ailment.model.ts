import { AilmentFilepath } from "./ailmentFilepaths.model";
import { AilmentIndication } from "./ailmentIndication.model";
import { AilmentNote } from "./ailmentNote.model";

export class Ailment {
    public ailmentDescription: string;
    public ailmentName: string;
    public ailmentNotes: AilmentNote[];
    public ailmentIndications: AilmentIndication[];
    public ailmentFilepaths: AilmentFilepath[];


    constructor(ailmentDescription: string, ailmentName: string, ailmentNotes: AilmentNote[], ailmentIndication: AilmentIndication[], ailmentFilepaths: AilmentFilepath[]) {
        this.ailmentDescription = ailmentDescription;
        this.ailmentName = ailmentName;
        this.ailmentNotes = ailmentNotes;
        this.ailmentIndications = ailmentIndication;
        this.ailmentFilepaths = ailmentFilepaths;
    }
}