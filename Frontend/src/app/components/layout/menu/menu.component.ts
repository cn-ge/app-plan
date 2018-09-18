import { Component, OnInit, Input  } from '@angular/core';
import { UserService } from "../../../services/user.service";
import { User } from '../../../models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    private loggedIn:     boolean    = false;
    private user:         User       = null;
    private userRole:     number     = 0; 

  	constructor(
      private userService : UserService,
    ) { }

  	ngOnInit() {
      this.loggedIn = this.userService.isLogged();
      this.user = this.userService.getCurrentUser();
      if (this.user) {
        this.userRole = this.user.role_id;
      }
    }
}
