export class currentDateAndUserDTO{
    private currentDate: Date;
    private userId: number;


    constructor(currentDate: Date, userId: number){
        this.currentDate = currentDate;
        this.userId = userId;
    }

    public get _userId(): number {
        return this.userId;
    }
    public set _userId(value: number) {
        this.userId = value;
    }

    public get _currentDate(): Date {
        return this.currentDate;
    }
    public set _currentDate(value: Date) {
        this.currentDate = value;
    }
    
    
}