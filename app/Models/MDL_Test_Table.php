<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MDL_Test_Table extends Model
{
    use HasFactory;

    protected $table = 'test_table';

    const CREATED_AT = 'created_time';
    const UPDATED_AT = 'updated_time';
}
