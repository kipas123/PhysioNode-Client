export class WorkHourListOfAvailableHour{
    public availableHour: Date;
    public empty: boolean;
    
    constructor(availableHour: Date, empty: boolean){
        this.availableHour = availableHour;
        this.empty = empty;
    }

}