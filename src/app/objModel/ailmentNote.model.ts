export class AilmentNote {
    public idailmentNote: number;
    public noteDescription: string;
    public noteHeader: string;


    constructor(idailmentNote: number, noteDescription: string, noteHeader: string) {
        this.idailmentNote = idailmentNote;
        this.noteDescription = noteDescription;
        this.noteHeader = noteHeader;
    }
}