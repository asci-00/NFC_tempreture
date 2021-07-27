import Authenticate from 'apis/Auth'

class Auth {
    constructor() {

    }
    login({id, password}) { 
        await (Authenticate.login({id, password}).then(res => res.json() ))
    }
    logout() { 
        sessionStorage.clear()

     }
    async isAuthenticated () {
        const auth = await (
            Authenticate.isAvailable(
                sessionStorage.getItem('tocken')
            ).then(res => res.json())
        )
        if(auth.status) return auth
        else return {rt : -1, message : 'network error'}
    }
}
export default new Auth()