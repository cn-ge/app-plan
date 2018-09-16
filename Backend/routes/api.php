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
    Route::resource('ctrPrioritization', 'CtrPrioritizationController', ['except' => ['create', 'edit']]);
    Route::resource('ctrExemption', 'CtrExemptionController', ['except' => ['create', 'edit']]);
    Route::resource('ctrDisponibility', 'CtrDisponibilityController', ['except' => ['create', 'edit']]);
    Route::resource('complementaryCourse', 'ComplementaryCourseController', ['except' => ['create', 'edit']]);
    Route::resource('complementaryModule', 'ComplementaryModuleController', ['except' => ['create', 'edit']]);
    Route::resource('chainingModule', 'ChainingModuleController', ['except' => ['create', 'edit']]);


    // ActivityLogController Routes
    Route::post('activity-log/purge', 'ActivityLogController@purge');
    Route::resource('activity-log', 'ActivityLogController', ['except' => ['create', 'edit', 'destroy']]);

    // PlanningCourseController Routes
    Route::get('planningcoursebyplanning/{id}', 'PlanningCourseController@getPlanningCourseByPlanningId');
    Route::resource('planningCourse', 'PlanningCourseController', ['except' => ['create', 'edit']]);

    // UserController Routes
    Route::resource('user', 'UserController', ['except' => ['create', 'edit', 'destroy']]);
    Route::put('password/{id}', 'UserController@updatePassword');

    // AuthController Routes
    Route::post('logout', 'AuthController@logout');
    Route::post('me', 'AuthController@me');
    Route::post('login', 'AuthController@login');
    Route::post('refresh', 'AuthController@refresh');

    // StatusServiceController Routes
    Route::get('backend-status', 'StatusServiceController@backend');
    Route::get('db-status', 'StatusServiceController@eniDbStatus');

    // PlanningController Routes
    Route::resource('planning', 'PlanningController', ['except' => ['create', 'edit']]);
    Route::get('planningsByCodeStagiaire/{code}', 'PlanningController@getByCodeStagiaire');
    Route::get('planningGlobal/{id}', 'PlanningController@showWithGlobal');
    Route::get('setPlanningBroken', 'PlanningController@setPlanningBroken');
    Route::get('getPlanningBroken', 'PlanningController@getPlanningBroken');

});
