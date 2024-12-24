import { apiAbstract } from '@vteam_components/methods'
import { route, type } from './static'
import { type testReducerType } from '@/Reducer/reducer/testRedux'

class apiAbs extends apiAbstract {
    route: typeof route
    type: typeof type

    constructor () {
        super()
        this.route = route
        this.type = type
    }

    get testRedux (): testReducerType {
        return this.store.getState().testRedux
    }
};

export default apiAbs
