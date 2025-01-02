import { useEffect } from "react";
import Echo from 'laravel-echo';

const Index = () => {
    const company_sid = 7;

    useEffect(() => {
        const echo = new Echo({
            broadcaster: 'reverb',
            key: 'vteamvteam',
            wsHost: 'notify.vteam-cloud.com',
            wsPort: 6001
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