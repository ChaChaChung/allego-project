<?php

namespace App\Http\Middleware;

// use Test\Package\Test;
// use Common\Package\AccessLog;
// use Common\Package\CommonGlobal;
// use Practice\Package\Practice;
// use Cloud\Package\Cloud;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use Closure;

class Middleware_Page_Permission
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
        $func_name = __FUNCTION__;
        try {
            //儲存請求路徑(url)
            $page_path = $request->path();

            // $a = Test::Test();
            // Log::alert("a => $a");

            // $b = Practice::Practice();
            // Log::alert("b => $b");

            // $c = AccessLog::AccessLog();
            // Log::alert("c => $c");

            // $d = AccessLog::WriteAccessLog();
            // Log::alert("d => $d");

            // $e = Cloud::Cloud();
            // Log::alert("e => $e");

            // Session::put('company_sid', 7);
            // Session::put('user_sid', 999);
            // AccessLog::LogHandle('M', $func_name, true, 'TEST');

            return $next($request);
        } catch (\Exception $e) {
            Log::alert($e->getMessage());

            return redirect('/');
        }
    }
}
