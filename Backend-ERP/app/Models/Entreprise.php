<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entreprise extends Model
{
    protected $table = 'entreprise';
    protected $primaryKey = 'CodeEntreprise';
    protected $dateFormat = 'Y-d-m H:i:s';
}
