import Api from './Api'

export const userSignIn = ({uuid}) => Api.post('/common/user/info', { uuid })
export const userSignUp = ({name, groupCode}) => Api.post('/user/', {name, groupCode})