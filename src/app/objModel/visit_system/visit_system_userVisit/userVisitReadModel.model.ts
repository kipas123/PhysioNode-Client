import { UserReadModel } from "app/objModel/user/userReadModel.model";
import { UserServiceTypeReadModel } from "../visit_system_userServiceType/userServiceTypeReadModel.model";

export class UserVisitReadModel{
    private idUserVisit: number;
    private userDTO: UserReadModel;
    private userVisitTime: Date;
    private userServiceTypeDTO: UserServiceTypeReadModel;
    private visitDate: Date;
    private visitProvider: UserReadModel;
    
    constructor(idUserVisit: number, userDTO: UserReadModel, userVisitTime: Date, userServiceTypeDTO: UserServiceTypeReadModel,
        visitDate: Date, visitProvider: UserReadModel){
            this._idUserVisit = idUserVisit;
            this.userDTO = userDTO;
            this.userVisitTime = userVisitTime;
            this.userServiceTypeDTO = userServiceTypeDTO;
            this.visitDate = visitDate;
            this.visitProvider = visitProvider;
        }
        
        public get _idUserVisit(): number {
            return this.idUserVisit;
        }
        public set _idUserVisit(value: number) {
            this.idUserVisit = value;
        }
        
        public get _visitDate(): Date {
            return this.visitDate;
        }
        public set _visitDate(value: Date) {
            this.visitDate = value;
        }
        public get _userDTO(): UserReadModel {
            return this.userDTO;
        }
        public set _userDTO(value: UserReadModel) {
            this.userDTO = value;
        }
        public get _userVisitTime(): Date {
            return this.userVisitTime;
        }
        public set _userVisitTime(value: Date) {
            this.userVisitTime = value;
        }
        public get _userServiceTypeDTO(): UserServiceTypeReadModel {
            return this.userServiceTypeDTO;
        }
        public set _userServiceTypeDTO(value: UserServiceTypeReadModel) {
            this.userServiceTypeDTO = value;
        }
        public get _visitProvider(): UserReadModel {
            return this.visitProvider;
        }
        public set _visitProvider(value: UserReadModel) {
            this.visitProvider = value;
        }
}