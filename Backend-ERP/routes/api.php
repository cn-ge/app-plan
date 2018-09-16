<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */


Route::group([
    'middleware' => [
        
    ],
], function () {

    Route::resource('stagiaireparentreprise', 'StagiaireParEntrepriseController', ['except' => ['create', 'edit', 'store', 'destroy', 'update', 'delete']]);
    Route::resource('entreprise', 'EntrepriseController', ['except' => ['create', 'edit', 'store', 'destroy', 'update', 'delete']]);
    Route::resource('titre', 'TitreController', ['except' => ['create', 'edit', 'store', 'destroy', 'update', 'delete']]);
    Route::resource('stagiaire', 'StagiaireController', ['except' => ['create', 'edit', 'store', 'destroy', 'update', 'delete']]);
    Route::resource('module', 'ModuleController', ['except' => ['create', 'edit', 'store', 'destroy', 'update', 'delete']]);
    Route::resource('cours', 'CoursController', ['except' => ['create', 'edit', 'store', 'destroy', 'update', 'delete']]);
    Route::resource('lieu', 'LieuController', ['except' => ['create', 'edit', 'store', 'destroy', 'update', 'delete']]);
    Route::get('getModuleByLibelleCourt/{LibelleCourt}', 'ModuleController@getModuleByLibelleCourt');

    
    // FormationController Routes
    Route::resource('formation', 'FormationController', ['except' => ['create', 'update', 'edit', 'store',  'destroy']]);
    Route::get('formationGlobal/{id}', 'FormationController@showWithGlobal');

    // StatusServiceController Routes
    Route::get('backend-status', 'StatusServiceController@backend');
    Route::get('db-status', 'StatusServiceController@erpStatus');

});
