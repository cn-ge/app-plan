import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Stagiaire } from '../../../models/stagiaire';
import { HeaderMenuDataService } from '../../../services/header-menu.service';
import { MENU } from '../../../utils/menu';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  username:             String;
  alertPlanningList:    Array<any>;

  constructor(
    private menuService:  HeaderMenuDataService,
  )
  { }

  ngOnInit() {
    registerLocaleData(localeFr);
    this.menuService.changeMessage(MENU.planning);
  }
}
