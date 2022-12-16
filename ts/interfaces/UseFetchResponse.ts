import { Ref } from 'vue'
interface RefreshOptions {
    dedupe?: boolean
}
export default interface IUseFetchResponse<T> {
    data: Ref<T | null>,
    pending: Ref<boolean>,
    execute: () => Promise<void>,
    refresh: (opts?: RefreshOptions) => Promise<void>,
    // error: Ref<ErrorT | null>
}
