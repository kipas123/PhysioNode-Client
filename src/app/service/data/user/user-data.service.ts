import { U } from '@angular/cdk/keycodes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { UserWriteModel } from 'app/objModel/user/userWriteMode.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
let API_URL = "http://localhost:8081/physio-node/user/";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  public currentUser: Observable<UserReadModel>;
  private currentUserSubject: BehaviorSubject<UserReadModel>;

  constructor(
    private http:HttpClient
  ) { 
    this.currentUserSubject = new BehaviorSubject<UserReadModel> (JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): UserReadModel {
    return this.currentUserSubject.value;
  }

  login(user: UserWriteModel): Observable<any> {
    const headers = new HttpHeaders(user ? {
      authorization:'Basic ' + btoa(user.userEmail + ':' + user.userPassword)
    }:{});

    return this.http.get<UserReadModel> (API_URL + "login", {headers:headers}).pipe(
      map(response => {
        if(response) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
  }

  logOut(): Observable<any> {
    return this.http.post(API_URL + "logout", {}).pipe(
      map(response => {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
      })
    );
  }

  register(user: UserWriteModel): Observable<any> {
    return this.http.post(API_URL + "registration", JSON.stringify(user),
  {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  executeGetUserByIdUser(id){
    return this.http.get<UserReadModel>(`http://localhost:8081/physio-node/user/${id}`);
    
  }
}
