import { Component, OnInit } from '@angular/core';
import { User } from 'app/objModel/user.model';
import { UserDataService } from 'app/service/data/user/user-data.service';
import { Console } from 'console';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
    private service:UserDataService
  ) { }

  ngOnInit(): void {
    this.refreshProfile();
  }
  loading = false;

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

  refreshProfile(){
    this.service.executeGetUserByIdUser(1).subscribe(
      response => {
        this.user = response;
       // console.log(response.email);
      }
    )
  }
  start(){
    // console.log(this.service.executeHelloUserBeanService());
    // this.service.executeHelloUserBeanService().subscribe();
    // console.log(this.user.getUsername);
  }

}
