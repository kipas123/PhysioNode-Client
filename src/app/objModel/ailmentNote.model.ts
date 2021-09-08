export class AilmentNote {
    public idailmentNote: number;
    public noteDescription: string;
    public noteHeader: string;
    public ailmentId: number;


    constructor(idailmentNote: number, noteHeader: string, noteDescription: string, ailmentId: number) {
        this.idailmentNote = idailmentNote;
        this.noteDescription = noteDescription;
        this.noteHeader = noteHeader;
        this.ailmentId = ailmentId;
    }
}