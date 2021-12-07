export class UserVisitWriteModel{
    private userId: number;
    private bookingDate: Date;
    private userServiceId: number;
    private bookingTime: Date;
    
    constructor(userId: number, bookingDate: Date, userServiceId:number, bookingTime: Date){
        this.userId = userId;
        this.bookingDate = bookingDate;
        this.userServiceId = userServiceId;
        this.bookingTime = bookingTime;
    }

    
    public get _userId(): number {
        return this.userId;
    }
    public set _userId(value: number) {
        this.userId = value;
    }
    public get _bookingDate(): Date {
        return this.bookingDate;
    }
    public set _bookingDate(value: Date) {
        this.bookingDate = value;
    }
    public get _userServiceId(): number {
        return this.userServiceId;
    }
    public set _userServiceId(value: number) {
        this.userServiceId = value;
    }
    public get _bookingTime(): Date {
        return this.bookingTime;
    }
    public set _bookingTime(value: Date) {
        this.bookingTime = value;
    }
}