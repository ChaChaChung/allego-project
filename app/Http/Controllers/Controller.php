<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $state_flag = false; // 成功/失敗旗標
    protected $state_text = '';    // 回傳 Ajax 文字回應
    protected $state_data = '';    // 回傳 Ajax 資料內容
    protected $state_log = '';     // 上傳 Log 文字
}
