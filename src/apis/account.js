import Api from './Api'

export const setAccountInfo = (info) => Api.get('/v1/useradmin/accountMGMT/put', info)
export const udeleteAccount = () => Api.delete('/v1/useradmin/accountMGMT/del')
export const updatePermission = ({uuid, groupCode}) => Api.post('/v1/useradmin/subgroup/authadd')