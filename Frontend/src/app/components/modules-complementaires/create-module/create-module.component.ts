import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct, NgbCalendar, NgbModule, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ComplementaryModule } from '../../../models/complementary-module';
import { ComplementaryModuleService} from '../../../services/complementary-module.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DataService } from '../../../services/data.service';


@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit  {

  // Evénement à la fermeture de la modal 
  message:string;  
  @Output() closed = new EventEmitter<string>();
  sendMessage() {
    this.closed.emit(this.message);
    this.data.changeMessage(this.message);
  }
  
  label: string;
  description: string;
  complementaryModule: ComplementaryModule = new ComplementaryModule();

  public error = [] ;
  confirmMsg :string = null;
  errorMsg : string = null; 

  constructor(
    private complementaryModuleService: ComplementaryModuleService,
    private modalService: NgbModal,
    private data: DataService,
  ) {  }

  ngOnInit() {
    registerLocaleData(localeFr);
    this.data.currentMessage.subscribe(message => this.message = message);
  }


  // Enregistrer cours
  enregistrerModule() {
    this.complementaryModule.label = this.label;
    this.complementaryModule.description = this.description;
    this.complementaryModuleService.saveModule(this.complementaryModule).subscribe(
      (data:ComplementaryModule) => this.handleData(data),
      error => this.handleError(error),
    );
  }

  // Gestion de la Fermeture de la modal
  private getDismissReason(reason: any) {
    this.sendMessage();
  }
    
  // Gestion de l'ouverture de la modal
  open(content) {
    this.label = null;
    this.description = null;
    this.error = [];
    this.confirmMsg = null;
    this.modalService.open(content, {ariaLabelledBy: 'app-create-module'}).result.then((result) => { }, (reason) => { });
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
  handleData(data:ComplementaryModule) {
    this.getDismissReason('close');
    this.errorMsg = null;
    this.error = [];
    this.confirmMsg = "Module complémentaire enregistré !";
    this.complementaryModule = data;
    this.sendMessage();
  }
}
