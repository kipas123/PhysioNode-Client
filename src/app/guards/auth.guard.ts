import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserReadModel } from 'app/objModel/userReadModel.model';
import { UnathorizedComponent } from 'app/pages/unathorized/unathorized.component';
import { UserDataService } from 'app/service/data/user/user-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  currentUser: UserReadModel;
  constructor(private router: Router, private userService: UserDataService) {
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.currentUser) {
      if(route.data.roles && route.data.roles.indexOf(this.currentUser.userRoleDTO.roleName) === -1){
        this.router.navigate(['/pages/unathorized']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/pages/login']);
    return false;
  }
}
