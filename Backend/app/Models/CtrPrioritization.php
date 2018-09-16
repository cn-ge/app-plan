<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CtrPrioritization extends Model
{
    protected $fillable = ['planning_id', 'module_id', 'before_date', 'priority'];

    public function planning()
    {
        return $this->hasOne(Planning::class);
    }

    public function module()
    {
        return $this->hasOne(Module::class);
    }
}
