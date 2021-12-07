export class UserWorkHourWriteModel{
    private userWorkHourBeginningTime: Date;
    private userWorkHourEndingTime: Date;
    private userId: number;
    private userWorkDay: Date;

    constructor(userWorkHourBeginningTime: Date, userWorkHourEndingTime: Date, userId: number, userWorkDay: Date){
        this.userWorkHourBeginningTime = userWorkHourBeginningTime;
        this.userWorkHourEndingTime = userWorkHourEndingTime;
        this.userId = userId;
        this.userWorkDay = userWorkDay;
    }

    public get _userWorkHourBeginningTime(): Date {
        return this.userWorkHourBeginningTime;
    }
    public set _userWorkHourBeginningTime(value: Date) {
        this.userWorkHourBeginningTime = value;
    }

    public get _userWorkHourEndingTime(): Date {
        return this.userWorkHourEndingTime;
    }
    public set _userWorkHourEndingTime(value: Date) {
        this.userWorkHourEndingTime = value;
    }
    public get _userWorkDay(): Date {
        return this.userWorkDay;
    }
    public set _userWorkDay(value: Date) {
        this.userWorkDay = value;
    }

    public get _userId(): number {
        return this.userId;
    }
    public set _userId(value: number) {
        this.userId = value;
    }
    
}