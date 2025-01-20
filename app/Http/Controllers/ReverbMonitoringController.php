<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redis;

class ReverbMonitoringController extends Controller
{
    public function getConnections()
    {
        $count = Redis::get('connected_devices_count') ?? 0;
        $devices = Redis::smembers('connected_devices') ?? [];
        
        return response()->json([
            'connected_devices_count' => $count,
            'connected_devices' => $devices,
        ]);
    }
}
