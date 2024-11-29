<?php

namespace App\Http\Middleware;

use Closure;
use Common\Package\AccessLog;
use Common\Package\CommonGlobal;

class ApiAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $func_name = __CLASS__ . ' -> ' . __FUNCTION__;
        try {
            // 清除資料
            CommonGlobal::$Terminal_SID = $request['terminal_sid'];
            CommonGlobal::$Company_SID = $request['company_sid'];
            
            return $next($request);
        } catch(\Throwable $e) {
            // 回傳認證錯誤訊息
            $http_code = 401 ;
            $api_status = 'INVALID_AUTHORIZATION';
            $msg = $e->getMessage() ;
            $state_text = $api_status . "\n" . $msg;

            // 紀錄失敗的 Log
            AccessLog::LogHandle('A', $func_name, false, $state_text);

            // 回傳資料
            return CommonGlobal::APIResponseMsg($http_code, $api_status, $msg);
        }

    }
}
