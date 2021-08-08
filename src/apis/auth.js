import Api from './Api'

export const getAuthInfo = ({uuid, token}) => Api.get('/v1/common/user/info', { uuid, token })
export const userSignUp = ({name, groupCode}) => Api.get('/user/', {name, groupCode})