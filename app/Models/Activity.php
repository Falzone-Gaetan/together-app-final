<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    protected $table = 'activities';
    
    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function user()
    {
        return $this->belongsToMany(User::class, 'activity_user')->withPivot('is_owner');
    }


}
