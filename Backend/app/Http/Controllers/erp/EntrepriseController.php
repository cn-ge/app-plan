<?php

namespace App\Http\Controllers;

use Illuminate\Support\facades\Config;
use App\Models\erp\Entreprise;
use App\Models\erp\StagiaireParEntreprise;
use App\Models\erp\Stagiaire;
use App\Http\Controllers\erp\StagiaireParEntrepriseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Log;


class EntrepriseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return Entreprise::all()->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Entreprise $entreprise)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return Entreprise::findOrFail(trim($entreprise->CodeEntreprise))->toJson();
    }
}
