import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AilmentFilesDTO } from 'app/objModel/fileSystem/ailmentFilesDTO.model';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { Observable } from 'rxjs';
let API_URL = "http://localhost:8081/physio-node/fileSystem/";
@Injectable({
  providedIn: 'root'
})
export class FileStorageDataService {
  headers: HttpHeaders;
  currentUser: UserReadModel;
  constructor(private http:HttpClient,
     private router: Router) { }

  private getCurrentUserHeader() : HttpHeaders{
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/pages/login']);
    }
    this.headers = new HttpHeaders({
      authorization:'Bearer ' + this.currentUser.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
    return this.headers;
  }

  executeGetFilesByAilmentId(ailmentid){
    return this.http.get<AilmentFilesDTO>(API_URL + `files/${ailmentid}`);
  }
  // upload(file: File) {
  //   var fd = new FormData();
  //       fd.append('file', file);
  //       this.http.post(uploadUrl, fd, {
  //           transformRequest: angular.identity,
  //           headers: {'Content-Type': undefined}
  //       })
  //       .success(function(){
  //       })
  //       .error(function(){
  //       });
  // }
  executeUploadFile(file: any, userId: number, ailmentId: number){
    const formData: FormData = new FormData();
    var blob = new Blob([file]);
     formData.append('file', file);
     formData.append('userId', userId.toString());
     formData.append('ailmentId', ailmentId.toString());
    //  console.log(file);
    return this.http.post<AilmentFilesDTO>(API_URL + `upload`,formData , {
      reportProgress: true,
      responseType: 'json'
    });
  }

  executeDeleteFile(fileId){
    return this.http.get<AilmentFilesDTO>(API_URL + `deleteFile/${fileId}`);
  }
}
