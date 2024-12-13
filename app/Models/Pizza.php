<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pizza extends Model
{
    /** @use HasFactory<\Database\Factories\PizzaFactory> */
    use HasFactory;

    protected $fillable = ['status'];

    protected $casts = [
        'toppings' => 'array'
    ];

    protected $appends = [
        'chef',
        'last_updated'
    ];

    protected $hidden = ['user'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getChefAttribute()
    {
        return $this->user->name;
    }

    public function getLastUpdatedAttribute()
    {
        return $this->updated_at->diffForHumans();
    }
}
