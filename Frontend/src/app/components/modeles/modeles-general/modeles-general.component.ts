import { Component, OnInit } from '@angular/core';
import { HeaderMenuDataService } from '../../../services/header-menu.service';
import { MENU } from '../../../utils/menu';

@Component({
  selector: 'app-modeles-general',
  templateUrl: './modeles-general.component.html',
  styleUrls: ['./modeles-general.component.scss']
})
export class ModelesGeneralComponent implements OnInit {

  constructor(
    private menuService:  HeaderMenuDataService,
  ) { }

  ngOnInit() {
    this.menuService.changeMessage(MENU.modele);
  }
}
