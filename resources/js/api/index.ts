import TestApi, { type TestApiParams, type TestApiResponse } from './testApi'

const api = {
    test: TestApi, // 全域變數 api
}

export default api
export type {
    TestApiParams,
    TestApiResponse,
}
