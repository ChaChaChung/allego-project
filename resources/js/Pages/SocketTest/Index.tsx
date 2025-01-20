import { useEffect, useState } from "react";
import Echo from 'laravel-echo';

const Index = () => {
    const company_sid = 7;

    const [lastHeartbeat, setLastHeartbeat] = useState(null);
    console.log("🚀 ~ Index ~ lastHeartbeat:", lastHeartbeat)

    useEffect(() => {
        const echo = new Echo({
            broadcaster: 'reverb',
            // key: 'vteamvteam',
            // wsHost: 'notify.vteam-cloud.com',
            // wsPort: 6001,
            key: 'vteam-booking-broadcast',
            wsHost: '192.168.1.201',
            wsPort: 6001,
            forceTLS: false,
        });

        echo.channel(`my-channel.${company_sid}`)
            .listen('.my-event', function (data) {
                alert(JSON.stringify(data));
            }
            );

        // 使用 Pusher 實例來監聽事件
        const pusher = echo.connector.pusher;

        // 綁定心跳事件
        pusher.connection.bind('message', (data) => {
            console.log("🚀 ~ pusher.connection.bind ~ data:", data)
            if (data?.event === 'pusher:pong') {
                setLastHeartbeat(new Date());
            }
        });
    }, [])

    useEffect(() => {
        const heartbeatCheck = setInterval(() => {
            if (lastHeartbeat) {
                const now = new Date();
                const diff = now as any - lastHeartbeat;
                console.log("🚀 ~ heartbeatCheck ~ diff:", diff)

                if (diff > 60000) {
                    // 重連
                    location.reload();
                }
            }
        }, 10000);

        return () => {
            clearInterval(heartbeatCheck);
        };
    }, [lastHeartbeat])

    return (
        <>this is home page</>
    )
}
export default Index