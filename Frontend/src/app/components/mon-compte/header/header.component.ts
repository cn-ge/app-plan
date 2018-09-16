import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { UserService } from '../../../services/user.service';
import { TokenService } from '../../../services/token.service';
import { User } from '../../../models/user';
import { ClearsessionService } from '../../../services/clearsession.service';

@Component({
  selector: 'mon-compte-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() messageChangeMdpEvent = new EventEmitter<string>()
  @Output() messageChangeCompteEvent = new EventEmitter<string>()
  @Input() currentUser : User;
  loggedIn: boolean;

  constructor(
    private login:          LoginService,
    private router:         Router,
    private userService:    UserService,
    private tokenService:   TokenService,
    private clearSessionService: ClearsessionService,
  ) { }

  ngOnInit(  ) {
     this.loggedIn = this.login.getStatus() ? true : false;
  } 

  changerMdp() {
    this.messageChangeMdpEvent.emit('editMdp');
  }

  changerCompte() {
    this.messageChangeCompteEvent.emit('editCompte');
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.login.changeAuthStatus(false);
    this.userService.unsetUser();
    this.tokenService.remove();
    this.router.navigateByUrl('/login');
    this.clearSessionService.run();
  }
}
