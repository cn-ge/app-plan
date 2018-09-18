import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { TokenService } from '../../services/token.service';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { ActivityLog } from '../../models/activitylog';
import { ActivityLogService } from '../../services/activitylog.service';
import { HeaderMenuDataService } from '../../services/header-menu.service';
import { MENU } from '../../utils/menu';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  message :         string;
  activityLog :     ActivityLog = null;
  currentUser :     User;

  public form = {
    email: null,
    password:null
  };

  public error = null;

  constructor(
    private loginService: LoginService,
    private tokenService: TokenService,
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router,
    private activityLogService: ActivityLogService,
    private datePipe: DatePipe,
    private menuService : HeaderMenuDataService,
  ) { }

  ngOnInit() {
    this.form.email = this.cookieService.get('user_email');
    this.menuService.changeMessage(MENU.login);
  }

  // vérification des informations du formulaire
  onSubmit(){
    return this.loginService.login(this.form).subscribe(
      data => {
        this.handleResponse(data);
      },
      error => {
        if (error.status == '0') {
          this.error = "Echec de connexion au serveur. Veuillez contacter l'administrateur du site !";
        } else {
          this.error=error.error.error;
        }
        this.createActivityLog('Echec de connexion', false);
      }
    );
  }

  // traitement de la réponse
  handleResponse(data) { 
    this.cookieService.set('user_email', this.form.email);
    if (data.user_is_active == true) {
      this.tokenService.handleToken(data.access_token);
      this.userService.getUser(data.user_id).subscribe(
        (data: User) => {
          this.currentUser = data;
          this.loginService.changeAuthStatus(true);
          this.userService.setUser(this.currentUser);
          this.createActivityLog('Connexion réussie', true);
          this.router.navigateByUrl('/plaanning');
        },
        error => {
          if (error.status == '0') {
            this.error = "Echec de connexion au serveur. Veuillez contacter l'administrateur du site !";
          } else {
            this.error=error.error.error;
          }
        }
      );
    } else {
      this.error = "Vous n'êtes pas autorisé à accéder à l'application. Veuillez contacter l'administrateur du site pour qu'il active votre compte !";
    }
  }

  // Journalisation de l'activité
  createActivityLog(action: string, result:boolean) {
    this.activityLog = new ActivityLog();
    this.activityLog.log_name = (result ? (this.currentUser.name+ ' '+ this.currentUser.firstname) : 'non connecté');
    this.activityLog.description = this.form.email;
    this.activityLog.subject_id=null;
    this.activityLog.subject_type=action;
    this.activityLog.causer_id= (result ? (JSON.parse(sessionStorage.getItem('user')).id) : 0);
    this.activityLog.causer_type='Login';
    this.activityLog.properties= this.datePipe.transform(new Date(),"yyyy-MM-dd HH:mm", 'fr-Fr');
    this.activityLogService.storeActivityLog(this.activityLog).subscribe(
      data => console.log("log d'activité enregistré"), 
      error => console.log("erreur d'enregistrement du log d'activité: "+ error)
    );
    this.activityLog = null;
  }
}