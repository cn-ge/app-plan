import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanningComponent } from './planning-general/planning.component';
import { PurgerPlanningComponent } from './purger-planning/purger-planning.component';
import { ExportComponent } from './planning-general/export/export.component';

const routes: Routes = [
	  {
    	path: '',
    	component: PlanningComponent
  	},
  	{
  		path: 'purger',
		component: PurgerPlanningComponent
	},
	{
		path: 'export',
		component: ExportComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule { }
