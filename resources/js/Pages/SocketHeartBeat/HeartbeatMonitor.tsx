import { useState, useEffect } from 'react';
import Echo from 'laravel-echo';

const HeartbeatMonitor = () => {
    const company_sid = 7;

    const [status, setStatus] = useState('connecting');
    const [lastHeartbeat, setLastHeartbeat] = useState(null);

    const echo = new Echo({
        broadcaster: 'reverb',
        key: 'vteamvteam',
        wsHost: 'notify.vteam-cloud.com',
        wsPort: 6001,
    });

    useEffect(() => {
        echo.channel(`my-channel.${company_sid}`)
            .listen('.my-event', function (data) {
                alert(JSON.stringify(data));
            }
            );
    }, [])

    useEffect(() => {
        // 確保 Echo 實例已經準備好
        if (!echo.connector?.pusher) {
            console.warn('Echo instance not properly initialized');
            return;
        }

        // 使用 Pusher 實例來監聽事件
        const pusher = echo.connector.pusher;

        // 連線狀態監聽
        pusher.connection.bind('connected', () => {
            setStatus('connected');
        });

        pusher.connection.bind('disconnected', () => {
            setStatus('disconnected');
        });

        pusher.connection.bind('connecting', () => {
            setStatus('connecting');
        });

        // 心跳監聽
        const handlePong = () => {
            setLastHeartbeat(new Date());
        };

        // 綁定心跳事件
        pusher.connection.bind('message', (data) => {
            console.log("🚀 ~ pusher.connection.bind ~ data:", data)
            if (data?.event === 'pusher:pong') {
                handlePong();
            }
        });

        // 定期檢查心跳
        const heartbeatCheck = setInterval(() => {
            if (lastHeartbeat) {
                const now = new Date();
                const diff = now as any - lastHeartbeat;

                if (diff > 30000) {
                    setStatus('unstable');
                    // 重連邏輯
                    pusher.connect();
                }
            }
        }, 5000);

        // 清理函數
        return () => {
            pusher.connection.unbind_all();
            clearInterval(heartbeatCheck);
        };
    }, [echo, lastHeartbeat]);

    return (
        <div className="p-4 rounded-lg border">
            <h3 className="text-lg font-medium mb-2">WebSocket 連線狀態</h3>
            <div className="flex items-center gap-2">
                <div
                    className={`w-3 h-3 rounded-full ${status === 'connected' ? 'bg-green-500' :
                        status === 'disconnected' ? 'bg-red-500' :
                            status === 'unstable' ? 'bg-yellow-500' : 'bg-gray-500'
                        }`}
                />
                <span className="capitalize">{status}</span>
            </div>
            {lastHeartbeat && (
                <p className="text-sm text-gray-600 mt-2">
                    最後心跳時間: {lastHeartbeat.toLocaleString()}
                </p>
            )}
        </div>
    );
};

export default HeartbeatMonitor;