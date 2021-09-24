import Api from './Api'

export const getTrendsData = () => Api.get('/v1/useradmin/dashboard/data-trends')
export const setRequest = (params) => Api.get('/v1/useradmin/subgroup/device/add', {...params})
export const deleteRequest = (params) => Api.get('/v1/useradmin/subgroup/device/del', {...params})