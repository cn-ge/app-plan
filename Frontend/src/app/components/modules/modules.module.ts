import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    ModulesRoutingModule,
  ],
  declarations: [
  	ModulesComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ModulesModule { }
