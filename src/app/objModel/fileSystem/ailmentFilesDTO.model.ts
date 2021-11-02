import { U } from "@angular/cdk/keycodes";

export class AilmentFilesDTO {
 public idailment_files: string;
 public name: string;
 public url: string;
 public type: string;
 public size: number;
 public dateAdded: Date;
 public userId: number;
 
    constructor(idailment_files: string, name: string, url: string, type: string, size: number, userId: number){
      this.idailment_files = idailment_files;
      this.name = name;
      this.url = url;
      this.type = type;
      this.size = size;
      this.dateAdded = this.dateAdded;
      this.userId = userId;
    }
  }