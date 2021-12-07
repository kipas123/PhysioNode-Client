export class ChosenTermDTO{
    private chosenTimeTerm: Date;
    private chosenDataTerm: Date;
    private serviceProviderId: number;
    
    constructor(chosenTimeTerm: Date, chosenDataTerm: Date, serviceProviderId:number){
        this.chosenDataTerm = chosenDataTerm;
        this.chosenTimeTerm = chosenTimeTerm;
        this.serviceProviderId=serviceProviderId;
    }


    public get _chosenTimeTerm(): Date {
        return this.chosenTimeTerm;
    }
    public set _chosenTimeTerm(value: Date) {
        this.chosenTimeTerm = value;
    }
    
    
    public get _chosenDataTerm(): Date {
        return this.chosenDataTerm;
    }
    public set _chosenDataTerm(value: Date) {
        this.chosenDataTerm = value;
    }
    
    public get _serviceProviderId(): number {
        return this.serviceProviderId;
    }
    public set _serviceProviderId(value: number) {
        this.serviceProviderId = value;
    }
    
}