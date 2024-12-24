type payload<T> = {
    [U in keyof T]?: T[U]
}

export interface actionType<T> {
    type: string
    payload: payload<T>
}

export const loadingType = {
    LOADING: 'LOADING',
    CLEAR_ALL: 'CLEAR_ALL'
}

export const testType = {
    CLEAR_ALL: 'CLEAR_ALL'
}
