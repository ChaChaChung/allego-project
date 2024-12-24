import { type testDataType } from '@/apiType'
import apiAbstract from './apiAbstract'

declare namespace TestApiParams {
}

declare namespace TestApiResponse {
}

class TestApi extends apiAbstract {
    async test ():Promise<void> {
        return await this.FormRequest<void>({
            url: this.route.test,
            data: {
                type: this.type.test,
            }
        })
    }
};

export default new TestApi()
export {
    type TestApiParams,
    type TestApiResponse
}
