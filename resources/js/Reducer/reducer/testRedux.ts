import { type testDataType } from '@/apiType'
import { testType, type actionType } from '../type'

const testState = {
}

export interface testReducerType {
}

export const testRedux = (state = testState, action: actionType<testReducerType>): testReducerType => {
    const a = Object.values(testType).filter((item) => item === action.type)
    if (action.type === testType.CLEAR_ALL) {
        return testState
    }
    if (a.length > 0) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state
}
