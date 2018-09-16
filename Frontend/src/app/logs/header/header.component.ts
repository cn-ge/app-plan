import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../utils/services/user.service';
import { LoginService } from '../../utils/services/login.service';
import { TokenService } from '../../utils/services/token.service';
import { User } from '../../utils/models/user';
import { ClearsessionService } from '../../utils/services/clearsession.service';


@Component({
  selector: 'logs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	
	// Envoyer un message au log Component pour raffraichir la liste
	@Output() refreshList = new EventEmitter<string>();
    sendMessage() {
		this.refreshList.emit();
	}
  
	
	loggedIn: boolean;
	loggedUser: User;

    constructor(
    	private login: LoginService,
	    private router: Router,
	    private userService: UserService,
		private token: TokenService,
		private clearSessionService: ClearsessionService,
	) { }

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
		this.clearSessionService.run();
	}

}
