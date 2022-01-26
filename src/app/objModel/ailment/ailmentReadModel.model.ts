import { UserReadModel } from "../user/userReadModel.model";
import { AilmentFilepath } from "./ailmentFilepaths.model";
import { AilmentIndication } from "./ailmentIndication.model";
import { AilmentNote } from "./ailmentNote.model";

export class AilmentReadModel {
    private _idailment: number;
    private _ailmentDescription: string;
    private _ailmentName: string;
    private _ailmentNotes: AilmentNote[];
    private _ailmentIndications: AilmentIndication[];
    private _ailmentFilepaths: AilmentFilepath[];
    private _attendingphysician: UserReadModel;
    
    
    constructor(idailment: number, ailmentDescription: string, ailmentName: string, ailmentNotes: AilmentNote[], ailmentIndication: AilmentIndication[], ailmentFilepaths: AilmentFilepath[], attendingphysician: UserReadModel) {
        this._idailment = idailment;
        this._ailmentDescription = ailmentDescription;
        this._ailmentName = ailmentName;
        this._ailmentNotes = ailmentNotes;
        this._ailmentIndications = ailmentIndication;
        this._ailmentFilepaths = ailmentFilepaths;
        this._attendingphysician = attendingphysician;
    }
    public get idailment(): number {
        return this._idailment;
    }
    public set idailment(value: number) {
        this._idailment = value;
    }
    public get ailmentDescription(): string {
        return this._ailmentDescription;
    }
    public set ailmentDescription(value: string) {
        this._ailmentDescription = value;
    }
    public get ailmentName(): string {
        return this._ailmentName;
    }
    public set ailmentName(value: string) {
        this._ailmentName = value;
    }
    public get ailmentIndications(): AilmentIndication[] {
        return this._ailmentIndications;
    }
    public set ailmentIndications(value: AilmentIndication[]) {
        this._ailmentIndications = value;
    }
    public get attendingphysician(): UserReadModel {
        return this._attendingphysician;
    }
    public set attendingphysician(value: UserReadModel) {
        this._attendingphysician = value;
    }
    public get ailmentNotes(): AilmentNote[] {
        return this._ailmentNotes;
    }
    public set ailmentNotes(value: AilmentNote[]) {
        this._ailmentNotes = value;
    }
    public get ailmentFilepaths(): AilmentFilepath[] {
        return this._ailmentFilepaths;
    }
    public set ailmentFilepaths(value: AilmentFilepath[]) {
        this._ailmentFilepaths = value;
    }
}