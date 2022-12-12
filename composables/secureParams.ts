const {public: {fetchUri}} = useRuntimeConfig()
export const useSecureParams = (...params: string[]) : boolean => {
    const rgx = new RegExp(/^[a-zA-Z\s]+$/g)
    try {
        for (let i = 0; i < params.length; i++) {
            params[i] = params[i].split('-').join(' ')
            if(!rgx.test(params[i])) {
                throw Error('Invalid params')
            }
        }
        new URL(`${fetchUri}/${params.join('/')}`)
        return true
    } catch (error) {
        return false;
    }
}