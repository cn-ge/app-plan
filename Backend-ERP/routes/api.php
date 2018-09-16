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

    Route::resource('stagiaireparentreprise', 'StagiaireParEntrepriseController', ['except' => ['create', 'edit', 'delete']]);
    Route::resource('entreprise', 'EntrepriseController', ['except' => ['create', 'edit', 'delete']]);
    Route::resource('titre', 'TitreController', ['except' => ['create', 'edit', 'delete']]);
    Route::resource('stagiaire', 'StagiaireController', ['except' => ['create', 'edit', 'delete']]);
    Route::resource('module', 'ModuleController', ['except' => ['create', 'edit', 'delete']]);
    Route::resource('cours', 'CoursController', ['except' => ['create', 'edit', 'delete']]);
    Route::resource('lieu', 'LieuController', ['except' => ['create', 'edit', 'delete']]);
    Route::get('getModuleByLibelleCourt/{LibelleCourt}', 'ModuleController@getModuleByLibelleCourt');

    // StatusServiceController Routes
    Route::get('backend-status', 'StatusServiceController@backend');
    Route::get('db-status', 'StatusServiceController@erpStatus');

});
