import { useEffect } from "react";
import Echo from 'laravel-echo';

const Index = () => {
    const company_sid = 7;

    useEffect(() => {
        const echo = new Echo({
            broadcaster: 'reverb',
            key: 'vteamvteam',
            wsHost: '192.168.1.201',
            wsPort: 6001,
            forceTLS: false,
            encrypted: false,
            enabledTransports: ['ws', 'wss'],
        });

        echo.channel(`my-channel.${company_sid}`)
            .listen('.my-event', function (data) {
                alert(JSON.stringify(data));
            }
            );
    }, [])

    return (
        <>this is home page</>
    )
}
export default Index