import { Component } from '@angular/core';
import {AuthService} from "../../../core/auth/auth.service";
import {UserInfoType} from "../../../../types/user-info.type";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userInfo: UserInfoType | null = null;

  constructor(private authService: AuthService) {
    if (this.authService.getLoggedIn()) {
      this.userInfo = this.authService.getUserInfo();
    }
  }

  ngOnInit(): void {
    this.authService.isLogged$
      .subscribe(isLoggedIn => {
        this.userInfo = isLoggedIn ? this.authService.getUserInfo() : null;
      })
  }

}
