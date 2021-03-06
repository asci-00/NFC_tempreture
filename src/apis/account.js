import Api from './Api'

export const getRequest = () => Api.get('/v1/useradmin/account')
export const getGroupList = () => Api.get('/v1/useradmin/subgroup/group/all')


export const approveRequest = (uuid, groupCode) => Api.post('/v1/useradmin/subgroup/authadd', { targetUUID : uuid, targetGroupCode : groupCode })
export const revokeRequest = (uuid) => Api.post('/v1/useradmin/subgroup/authremove', { targetUUID : uuid })
export const requestNewAccountGroup = (displayname, email, uuid, Group_name, address) => Api.post('/v1/useradmin/subgroup/group', { displayname, email, uuid, Group_name, address })
export const requestNewAccount = (displayname, email, uuid, groupCode) => Api.post('/v1/useradmin/subgroup/user', { email, displayname, uuid, groupCode })
export const updateRequest = (uuid) => Api.put('/v1/useradmin/accountMGMT', {targetUUID : uuid})
export const deleteRequest = (uuid) => Api.delete('/v1/useradmin/account', {targetUUID : uuid})