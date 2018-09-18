import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { UserService } from '../../../services/user.service';
import { TokenService } from '../../../services/token.service';
import { User } from '../../../models/user';
import { SessionService } from '../../../services/session.service';
import { HeaderLoginDataService } from "../../../services/header-login.service";
import { HeaderMenuDataService } from '../../../services/header-menu.service';
import { MENU } from '../../../utils/menu';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private messageConnexion             : string;
  private messageMenu             : string;
  private navbarOpen          : boolean    = false;   // Menu à afficher en responsive
  private loggedIn            : boolean;   
  private user                : User       = null;
  private currentComponent    : string     = null;
  private menus               : string[]   = null;

  constructor(
    private headerLoginService:   HeaderLoginDataService,
    private headerMenuService:    HeaderMenuDataService,
    private login:                LoginService,
    private router:               Router,
    private userService:          UserService,
    private tokenService:         TokenService,
    private sessionService:       SessionService,
  ) {}

  ngOnInit() {
    // Vérifier si l'utilisateur est connecté
    this.loggedIn = this.userService.isLogged();
    // Récupérer l'utilisateur connecté
    this.user = this.userService.getCurrentUser();
    // Souscrire au service de connexion
    this.headerLoginService.currentMessage.subscribe(message => this.handleConnexionMessage(message));
    this.headerMenuService.currentMessage.subscribe(message => this.handleMenuMessage(message));
  }  

  handleConnexionMessage(message: string) {
    if (this.messageConnexion != message ) { 
      this.messageConnexion = message;
      this.ngOnInit();  
    } 
  }

  handleMenuMessage(message: string) {
    if (this.messageMenu != message ) { 
      this.messageMenu = message;
      this.currentComponent = message;
      this.ngOnInit();  
    } 
  }
  
  // (en mode responsive) Affiche le menu
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  // Déconnecte l'utilisateur
  logout(event: MouseEvent) {
    event.preventDefault();
    this.login.changeAuthStatus(false);
    this.userService.unsetUser();
    this.tokenService.remove();
    this.router.navigateByUrl('/login');
    this.sessionService.run();
  }
}
