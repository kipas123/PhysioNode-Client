export class exerciseWriteModel{
    private exerciseName: String;
    private exerciseDescription: String;
    private user: number;
    private attendingCoach: number;
    
    constructor(exerciseName: String, exerciseDescription: String, user: number, attendingCoach: number){
        this.exerciseName = exerciseName;
        this.exerciseDescription = exerciseDescription;
        this.user = user;
        this.attendingCoach = attendingCoach;
    }
    
    public get _user(): number {
        return this._user;
    }
    public set _user(value: number) {
        this.user = value;
    }
    
    public get _attendingCoach(): number {
        return this.attendingCoach;
    }
    public set _attendingCoach(value: number) {
        this.attendingCoach = value;
    }
    public get _exerciseName(): String {
        return this.exerciseName;
    }
    public set _exerciseName(value: String) {
        this.exerciseName = value;
    }
    public get _exerciseDescription(): String {
        return this.exerciseDescription;
    }
    public set _exerciseDescription(value: String) {
        this.exerciseDescription = value;
    }
}