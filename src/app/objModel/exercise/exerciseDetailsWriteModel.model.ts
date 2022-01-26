export class ExerciseDetailsWriteModel{
    private exerciseDetailsHeader: String;
    private exerciseDetailsDescription: String;
    private exerciseBook: number;
    constructor(exerciseDetailsHeader: String, exerciseDetailsDescription: String, exerciseBook: number){
        this.exerciseDetailsHeader = exerciseDetailsHeader;
        this.exerciseDetailsDescription = exerciseDetailsDescription;
        this.exerciseBook = exerciseBook;
    }
    public get _exerciseDetailsHeader(): String {
        return this.exerciseDetailsHeader;
    }
    public set _exerciseDetailsHeader(value: String) {
        this.exerciseDetailsHeader = value;
    }
    public get _exerciseDetailsDescription(): String {
        return this.exerciseDetailsDescription;
    }
    public set _exerciseDetailsDescription(value: String) {
        this.exerciseDetailsDescription = value;
    }
    public get _exerciseBook(): number {
        return this.exerciseBook;
    }
    public set _exerciseBook(value: number) {
        this.exerciseBook = value;
    }
}