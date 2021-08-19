import Api from './Api'

export const getRequest = () => Api.get('/v1/useradmin/subgroup/device/lookup/all')
export const setRequest = (params) => Api.get('/v1/useradmin/subgroup/device/add', {...params})
export const deleteRequest = (params) => Api.get('/v1/useradmin/subgroup/device/del', {...params})