import { type loadingReducerType } from '../reducer/loadingRedux'
import { type actionType, loadingType } from '../type'

class loadingAction {
    // common
    loading (state: boolean): actionType<loadingReducerType> {
        return {
            type: loadingType.LOADING,
            payload: {
                loading: state
            }
        }
    }
}

export default new loadingAction()
export {
    type loadingAction
}
