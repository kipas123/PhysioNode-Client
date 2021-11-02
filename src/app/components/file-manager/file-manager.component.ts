import { Component, Input, OnInit } from '@angular/core';
import { AilmentFilesDTO } from 'app/objModel/fileSystem/ailmentFilesDTO.model';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { FileStorageDataService } from 'app/service/data/fileSystem/file-storage-data.service';

@Component({
  selector: 'file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {
  alertAddedFile: boolean = false;
  alertDelateFile: boolean = false;
  uploadedFile: File;
  addFileFormShow: boolean = false;
  ailmentFiles: AilmentFilesDTO;
  @Input("ailmentId") ailmentId: number;
  @Input("currentUser") currentUser: UserReadModel;

  constructor(private fileStorageService: FileStorageDataService) { }

  ngOnInit(): void {
    this.getAilmentFiles();
  }

  public onFileChanged(event) {
    //Select File
    this.uploadedFile = event.target.files[0];
  }

  getAilmentFiles(){
    console.log("Oto id choroby" + this.ailmentId);
    console.log("Oto obecny uzytkownik: "+ this.currentUser);
    this.fileStorageService.executeGetFilesByAilmentId(this.ailmentId).subscribe(
      response => {
        this.ailmentFiles = response;
      }
    );
  }
  showAddForm(){
    this.addFileFormShow = !this.addFileFormShow;
  }

  uploadFile(){
    this.fileStorageService.executeUploadFile(this.uploadedFile, this.currentUser.userId, this.ailmentId).subscribe(
      response => {
        console.log("Poprawnie dodano plik!");
        this.getAilmentFiles();
        this.alertAddedFile = true;
        this.alertDelateFile = false;
        this.addFileFormShow = !this.addFileFormShow;
      },
      error => {
        console.log("Error");
      }
      
    );
  }
  deleteFile(id: string){
    this.fileStorageService.executeDeleteFile(id).subscribe(
      response =>{
        this.getAilmentFiles();
        this.alertAddedFile = false
        this.alertDelateFile = true;
      },
      error => {
        console.log("Error");
      }
    )
    console.log(id);
  }
  onClose(){
    this.alertAddedFile = false;
    this.alertDelateFile = false;
  }

  isUploadedByCurrenUser(fileOwner: number):boolean{
    if(fileOwner==this.currentUser.userId) return true;
    else return false;
  }

}
