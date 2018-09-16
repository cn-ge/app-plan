<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StagiaireParEntreprise extends Model
{
    protected $table = 'StagiaireParEntreprise';
    protected $primaryKey = 'NumLien';
    protected $dateFormat = 'Y-d-m H:i:s';
}
