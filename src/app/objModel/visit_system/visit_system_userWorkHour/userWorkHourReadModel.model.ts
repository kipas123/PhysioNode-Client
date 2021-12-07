export class UserWorkHourReadModel{
    private idUserWorkHour: number;
    private userWorkHourBeginningTime: Date;
    private userWorkHourEndingTime: Date;

    constructor(idUserWorkHour: number, userWorkHour_beginningTime: Date, userWorkHour_endingTime: Date, userWorkDay_idUserWorkDay: number, userWorkDay_WorkDay: Date){
        this.idUserWorkHour = idUserWorkHour;
        this.userWorkHourBeginningTime = userWorkHour_beginningTime;
        this.userWorkHourEndingTime = userWorkHour_endingTime;
    }


    
    public get _idUserWorkHour(): number {
        return this.idUserWorkHour;
    }
    public set _idUserWorkHour(value: number) {
        this.idUserWorkHour = value;
    }

    public get _userWorkHour_beginningTime(): Date {
        return this.userWorkHourBeginningTime;
    }
    public set _userWorkHour_beginningTime(value: Date) {
        this.userWorkHourBeginningTime = value;
    }

    public get _userWorkHour_endingTime(): Date {
        return this.userWorkHourEndingTime;
    }
    public set _userWorkHour_endingTime(value: Date) {
        this.userWorkHourBeginningTime = value;
    }


}