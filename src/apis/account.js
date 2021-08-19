import Api from './Api'

export const getRequest = () => Api.get('/v1/useradmin/account/lookup')
export const setRequest = ({type, data}) => Api.post('/v1/useradmin/subgroup/authadd', { type, data})
export const deleteRequest = (uuid) => Api.delete('/v1/useradmin/account/del', {uuid})