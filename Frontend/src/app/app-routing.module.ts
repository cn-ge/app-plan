import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoggedGuard } from './guards/logged.guard';
import { OnlyPedagGuard } from './guards/onlypedag.guard';
import { OnlyAdminGuard } from './guards/onlyadmin.guard';
import { NoChangeAllowed } from './guards/nochangeallowed.guard';

//Lazy loading. Real routes are defined in each module (modulename-routing.module)
const routes: Routes = [
	{
		path: 'planning',
		loadChildren: './components/planning/planning.module#PlanningModule',
		canActivate: [AuthGuard] 
	},
	{
		path: 'plannings-en-defaut',
		loadChildren: './components/plannings-en-defaut/plannings-en-defaut.module#PlanningsEnDefautModule',
		canActivate: [OnlyPedagGuard] 
	},
	{
		path: 'modeles',
		loadChildren: './components/modeles/modeles.module#ModelesModule',
		canActivate: [OnlyPedagGuard] 
	},
	{
		path: 'mon-compte',
		loadChildren: './components/mon-compte/mon-compte.module#MonCompteModule',
		canActivate: [AuthGuard, NoChangeAllowed] 
	},
	{
		path: 'modules-complementaires',
		loadChildren: './components/modules-complementaires/modules-complementaires.module#ModulesComplementairesModule',
		canActivate: [OnlyPedagGuard] 
	},
	{
		path: 'modules',
		loadChildren: './components/modules/modules.module#ModulesModule',
		canActivate: [OnlyPedagGuard] 
	},
	{
		path: 'admin/logs',
		loadChildren: './components/logs/logs.module#LogsModule',
		canActivate: [OnlyAdminGuard] 
	},
	{
		path: 'admin/statut',
		loadChildren: './components/statut/statut.module#StatutModule',
		canActivate: [OnlyAdminGuard] 
	},
	{
		path: 'admin/utilisateurs',
		loadChildren: './components/utilisateurs/utilisateurs.module#UtilisateursModule',
		canActivate: [OnlyAdminGuard] 
	},
	{
		path: 'login',
		loadChildren: './components/login/login.module#LoginModule',
		canActivate: [LoggedGuard] 
	},
	{
		path: 'unauthorized',
		loadChildren: './components/unauthorized/unauthorized.module#UnauthorizedModule',
		canActivate: [AuthGuard] 
	},
	{
		path: '',
		redirectTo: 'planning',
		pathMatch: 'full'
	},
	// otherwise redirect to planning
    { path: '**', redirectTo: 'planning' }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule {}