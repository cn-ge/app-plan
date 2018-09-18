import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { LoginService } from '../../../services/login.service';
import { TokenService } from '../../../services/token.service';
import { User } from '../../../models/user';
import { SessionService } from '../../../services/session.service';


@Component({
  selector: 'statut-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 	loggedIn: boolean;
    loggedUser: User;

    constructor(
      private login: LoginService,
      private router: Router,
      private userService: UserService,
      private token: TokenService,
      private clearsessionService: SessionService,
    ) {}

    ngOnInit() {
      this.loggedIn = this.login.getStatus() ? true : false;
      this.loggedUser = JSON.parse(sessionStorage.getItem('user'));
    }    

    logout(event: MouseEvent) {
      event.preventDefault();
      this.login.changeAuthStatus(false);
      this.router.navigateByUrl('/login');
      this.userService.unsetUser();
      this.token.remove();
      this.clearsessionService.run();
    }
}
