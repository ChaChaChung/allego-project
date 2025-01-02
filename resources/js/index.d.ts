import type * as apiFile from 'api'
import { type Page } from '@inertiajs/inertia'
import { type loadingAction } from 'Reducer/action/loadingAction'
import { type loadingReducerType } from 'Reducer/reducer/loadingRedux'
import { type testAction } from 'Reducer/action/testAction'
import { type testReducerType } from '@/Reducer/reducer/testRedux'

declare global {
    // pic
    module '*.png' {
        const value: any
        export default value
    }
    module '*.jpg' {
        const value: any
        export default value
    }
    module '*.jpeg' {
        const value: any
        export default value
    }
    module '*.svg' {
        const value: any
        export default value
    }
    module '*.gif' {
        const value: any
        export default value
    }

    // style
    module '*.css' {
        const classes: Record<string, string>
        export default classes
    }
    module '*.scss' {
        const classes: Record<string, string>
        export default classes
    }
    module '*.sass' {
        const classes: Record<string, string>
        export default classes
    }
    module '*.less' {
        const classes: Record<string, string>
        export default classes
    }
    module '*.style' {
        const classes: Record<string, string>
        export default classes
    }

    interface storeT {
        loading: loadingReducerType
        testRedux: testReducerType
    }

    interface actionT {
        loading: loadingAction
        test: testAction
    }

    namespace React {
        type MutableRefObject<T> = React.LegacyRef<T>
    }

    let api: typeof apiFile.default
    let Pusher: typeof Pusher

    interface Window {
        api: api
        Pusher: Pusher
    }
}
export {}
