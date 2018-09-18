import { Component, OnInit } from '@angular/core';
import { MENU } from '../../utils/menu';
import { HeaderMenuDataService } from '../../services/header-menu.service';

@Component({
  selector: 'app-plannings-en-defaut',
  templateUrl: './plannings-en-defaut.component.html',
  styleUrls: ['./plannings-en-defaut.component.scss']
})
export class PlanningsEnDefautComponent implements OnInit {

  constructor(
    private menuService:  HeaderMenuDataService,
  ) { }
  
  ngOnInit() {
    this.menuService.changeMessage(MENU.utilisateurs);
  }

}
