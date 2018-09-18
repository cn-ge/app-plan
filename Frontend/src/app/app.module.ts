import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';
import {
  //MatButtonModule
 } from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/layout/menu/menu.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HeaderLoginDataService } from './services/header-login.service';


@NgModule({
	exports: [
    BrowserAnimationsModule,
    HttpModule,
	]
})
export class AngularMaterialModule {}


@NgModule({
  declarations: [
      AppComponent,
      FooterComponent,
      HeaderComponent,
      MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    NgSelectModule,
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    CookieService,
    DatePipe,
    HeaderLoginDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
