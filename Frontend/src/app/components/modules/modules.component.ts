import { Component, OnInit } from '@angular/core';
import { HeaderMenuDataService } from '../../services/header-menu.service';
import { MENU } from '../../utils/menu';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  constructor(
    private menuService:  HeaderMenuDataService,
  ) { }
  
  ngOnInit() {
    this.menuService.changeMessage(MENU.module);
  }

}
