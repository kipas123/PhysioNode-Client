import { UserReadModel } from "../user/userReadModel.model";
import { ExerciseDetailsReadModel } from "./exerciseDetailsReadModel.model";

export class exerciseReadModel{
    private _idexerciseBook: number;
    private _exerciseName: String;
    private _exerciseDescription: String;
    private _attendingCoach: UserReadModel;
    private _exerciseDetailsReadModel: ExerciseDetailsReadModel[];
    
    constructor(idexerciseBook: number, exerciseName: String, exerciseDescription: String, attendingCoach: UserReadModel, exerciseDetailsReadModel:ExerciseDetailsReadModel[]){
        this._idexerciseBook = idexerciseBook;
        this._exerciseName = exerciseName;
        this._exerciseDescription = exerciseDescription;
        this._attendingCoach = attendingCoach;
        this._exerciseDetailsReadModel = exerciseDetailsReadModel;
    }
    
    
    public get attendingCoach(): UserReadModel {
        return this._attendingCoach;
    }
    public set attendingCoach(value: UserReadModel) {
        this._attendingCoach = value;
    }
    public get idexerciseBook(): number {
        return this._idexerciseBook;
    }
    public set idexerciseBook(value: number) {
        this._idexerciseBook = value;
    }
    public get exerciseName(): String {
        return this._exerciseName;
    }
    public set exerciseName(value: String) {
        this._exerciseName = value;
    }
    public get exerciseDescription(): String {
        return this._exerciseDescription;
    }
    public set exerciseDescription(value: String) {
        this._exerciseDescription = value;
    }
    public get exerciseDetailsReadModel(): ExerciseDetailsReadModel[] {
        return this._exerciseDetailsReadModel;
    }
    public set exerciseDetailsReadModel(value: ExerciseDetailsReadModel[]) {
        this._exerciseDetailsReadModel = value;
    }
}