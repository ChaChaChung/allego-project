import { useEffect } from "react";
import Echo from 'laravel-echo';

const Index = () => {
    useEffect(() => {
        const echo = new Echo({
            broadcaster: 'pusher',
            key: '408913ea1a6ccc83a7e8',
            cluster: 'ap3',
            forceTLS: true
        });

        echo.channel('my-channel')
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