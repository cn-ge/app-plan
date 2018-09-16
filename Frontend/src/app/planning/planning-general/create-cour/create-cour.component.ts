import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct, NgbCalendar, NgbModule, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ComplementaryModule } from '../../../utils/models/complementary-module';
import { ComplementaryModuleService} from '../../../utils/services/complementary-module.service';
import { ComplementaryCours } from '../../../utils/models/complementary-cours';
import { ComplementaryCoursService } from '../../../utils/services/complementary-cours.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DataService } from '../../../utils/services/data.service';


@Component({
  selector: 'app-create-cour',
  templateUrl: './create-cour.component.html',
  styleUrls: ['./create-cour.component.scss']
})
export class CreateCourComponent implements OnInit  {
  // https://github.com/ng-bootstrap/ng-bootstrap/tree/master/demo/src/app/components
  // https://ng-bootstrap.github.io/#/components/datepicker/overview

  // Message for LeftPanelComponent
  @Output() closed = new EventEmitter<string>();
  sendMessage() {
    this.closed.emit(this.message);
    this.data.changeMessage('newCours');
  }

  // Message from create Module
  message: string;
  receiveMessage($event) {
    console.log('message reçu', event.returnValue);
    this.getComplementaryModules();
    console.log('liste modules', this.complementaryModules);
  }
  
  disabled : boolean = false;
  dateToBeDefined: boolean = false;
  closeResult: string = null; 
  model: NgbDateStruct;
  value:any = {};

  complementaryModules:   ComplementaryModule[];
  complementaryModule:    ComplementaryModule ;
  complementaryCours:     ComplementaryCours;
  date_start:             NgbDateStruct;
  date_end:               NgbDateStruct;
  exist:                  false;

  public error = [] ;
  confirmMsg :string = null;
  errorMsg : string = null; 

  constructor(
    private modalService: NgbModal,
    private calendar: NgbCalendar,
    private complementaryModuleService: ComplementaryModuleService,
    private complementaryCoursService: ComplementaryCoursService,
    private data: DataService,
  ) {
    registerLocaleData(localeFr);
  }

  ngOnInit() {
    this.getComplementaryModules();
    this.complementaryCours = new ComplementaryCours();
  }

  // Recherche des modules existants  
  getComplementaryModules() {
    console.log('this.complementaryModules',this.complementaryModules);
    this.complementaryModuleService.getComplementaryModules().subscribe(
      (data :ComplementaryModule[]) => {
        this.complementaryModules = data.sort(function(a, b) {
          if (a.description < b.description)
            return -1;
          else if (a.description > b.description)
            return 1;
          return 0;
        });
      },
      (error) => console.log('erreur de communication avec le serveur', error),
    );
  }

  // Enregistrer le cours complémentaire
  enregistrerCours() {
    this.createComplementaryCours();
    this.complementaryCoursService.enregistrerComplementaryCourses(this.complementaryCours).subscribe(
      (data)=> { this.handleData(data); },
      (error)=> { this.handleError(error); }
    );
  }

  // Raffraichir la liste des modules
  refreshList() {
    this.getComplementaryModules(); 
  }

  isDisabled = (date: NgbDate, current: {month: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;

  // Construction de l'objet cours complémentaire 
  createComplementaryCours() {
    var convertStartDate;
    var convertEndDate;
    convertStartDate= new Date(this.date_start.year +'-' + this.date_start.month +'-' + this.date_start.day + ' 06:06');
    convertEndDate= new Date(this.date_end.year +'-' + this.date_end.month +'-' + this.date_end.day + ' 06:06');
    this.complementaryCours.date_start = convertStartDate;    this.complementaryCours.date_end = convertEndDate;
    var diff = Math.abs(convertEndDate.getTime() - convertStartDate.getTime());
    var diffHours = (Math.round((diff) / (1000 * 3600 * 24)) *7)+7;
    this.complementaryCours.real_hours = diffHours;
    if (!this.complementaryCours.date_to_be_defined) {
      this.complementaryCours.expected_hours = this.complementaryCours.real_hours;
    } 
  }

  // Changement des dates à redéfinir
  changeDateToBeDefined(dateToBeDefined: boolean) {
    this.dateToBeDefined = !this.dateToBeDefined;
    this.complementaryCours.expected_hours = null;
  }
  
  // Gestion de la fermeture de la modal
  private getDismissReason(reason: any) {
    this.sendMessage();
  }
  
  // Gestion de l'ouverture de la modal
  open(content) {
    this.complementaryModule = null;
    this.dateToBeDefined = false;
    this.date_start = null;
    this.date_end = null;
    this.error = [];
    this.confirmMsg = null;
    this.modalService.open(content, {ariaLabelledBy: 'app-create-cour'}).result.then((result) => { }, (reason) => { });
  }
  
  // Traitement des erreurs
  handleError(error) {
    this.confirmMsg = null;
    if (error.status == '500') {
      this.errorMsg = "Echec de connexion au serveur. Veuillez contacter l'administrateur du site !";
    } else {
      this.error=error.error.errors;
      console.log('error:', this.error); 
    }
  }
  
  // Traitement des données
  handleData(data) {
    console.log('this.complementaryCours', this.complementaryCours);
    this.errorMsg = null;
    this.error = [];
    this.confirmMsg = "Cours complémentaire enregistré !";
    this.getDismissReason('close');
    this.sendMessage();
  }
}