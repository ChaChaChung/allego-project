<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Common\Package\AccessLog;
use Common\Package\CommonGlobal;
use Illuminate\Support\Facades\Log;

class CTL_API_Test extends Controller
{
    // 測試核銷票券
    public function Test_Log(Request $request)
    {
        $func_name =  __FUNCTION__;
        try {
            Log::alert($request);

            AccessLog::LogHandle('M', $func_name, true, 'API TEST LOG SUCCESS');

            // 回傳查詢結果
            return CommonGlobal::APIResponseMsg(200, 'ACCEPTED', '', "OK");
        } catch (\Throwable $e) {
            return CommonGlobal::APIResponseMsg(400, 'TEST_LOG_FAILED', $e->getMessage());
        }
    }
}
