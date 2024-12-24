import { reducer } from '@vteam_components/redux'
import loadingAction from './action/loadingAction'
import { loadingReducer } from './reducer/loadingRedux'
import testAction from './action/testAction'
import { testRedux } from './reducer/testRedux'

reducer.setReducer = {
    loading: loadingReducer,
    testRedux,
}

// 這邊 的 key 不用用 'action' suffix
reducer.setAction = {
    loading: loadingAction,
    test: testAction,
}
