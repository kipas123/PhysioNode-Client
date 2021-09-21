import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { UserDataService } from 'app/service/data/user/user-data.service';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: UserReadModel;
  loading: boolean = false;
  constructor(
    private service:UserDataService, private router: Router
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }


}
