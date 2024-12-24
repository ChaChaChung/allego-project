<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Common\Package\AccessLog;
use Common\Package\CommonGlobal;
use App\Events\MyEvent;

use App\Models\MDL_Test_Table;

class CTL_Test extends Controller
{
    public function Method_Test(Request $request)
    {
        try {
            // 判斷傳入POST type類型
            switch ($request->type) {
                case 'test':
                    return $this->Do_Test($request);
                    break;
                default:
                    throw new \Exception('未知type (type:' . $request->type . ')');
            }
        } catch (\Throwable $e) {
            $this->state_flag = false;
            $this->state_text = $this->state_text ? $this->state_text : '無法取得測試資料';
            $this->state_log = '呼叫 CTL_Test 函式失敗 - ' . $e->getMessage();
        } finally {
            // 紀錄 Log
            if ($this->state_log != '') {
                AccessLog::LogHandle('G', __FUNCTION__, $this->state_flag, $this->state_log);
            }

            return CommonGlobal::AJAXResponse($this->state_flag, $this->state_text, $this->state_data);
        }
    }

    protected function Do_Test()
    {
        try {
            MDL_Test_Table::insert([
                'test_date' => date('Y-m-d H:i:s'),
            ]);

            event(new MyEvent('有新資料'));

            $this->state_flag = true;
            $this->state_text = '';
            $this->state_data = '';
            $this->state_log = '';
        } catch (\Throwable $e) {
            $this->state_flag = false;
            $this->state_text = $this->state_text ? $this->state_text : '測試失敗';
            $this->state_log = '測試失敗 - ' . $e->getMessage();
        }
    }
}
