export class ExerciseDetailsReadModel{
    private _exerciseDetailsHeader: String;
    private _exerciseDetailsDescription: String;
    constructor(exerciseDetailsHeader: String, exerciseDetailsDescription: String){
        this.exerciseDetailsHeader = exerciseDetailsHeader;
        this.exerciseDetailsDescription = exerciseDetailsDescription;
    }
    public get exerciseDetailsDescription(): String {
        return this._exerciseDetailsDescription;
    }
    public set exerciseDetailsDescription(value: String) {
        this._exerciseDetailsDescription = value;
    }
    public get exerciseDetailsHeader(): String {
        return this._exerciseDetailsHeader;
    }
    public set exerciseDetailsHeader(value: String) {
        this._exerciseDetailsHeader = value;
    }
}