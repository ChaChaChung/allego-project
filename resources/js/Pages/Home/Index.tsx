import { useEffect } from "react";
import api from '@/api/index';

const Index = () => {
    useEffect(() => {
        api.test.test()
    }, [])

    return (
        <>this is home page</>
    )
}
export default Index