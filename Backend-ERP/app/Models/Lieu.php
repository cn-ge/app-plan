<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lieu extends Model
{
    protected $table = 'lieu';
    protected $primaryKey = 'CodeLieu';

    public function plannings()
    {
        return $this->hasMany(Planning::class, 'lieu_id');
    }
}
