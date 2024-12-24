import { loadingType, type actionType } from '../type'

const loadingState = {
    loading: false,
}

export type loadingReducerType = typeof loadingState

export const loadingReducer = (state = loadingState, action: actionType<loadingReducerType>): loadingReducerType => {
    const a = Object.values(loadingType).filter((item) => item === action.type)
    if (action.type === loadingType.CLEAR_ALL) {
        return loadingState
    }
    if (a.length > 0) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state
}
