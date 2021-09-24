//react library
import React from "react";
//@material-ui components
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import MaterialTable, { MTableToolbar } from 'material-table';
//icons
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import PanToolIcon from '@material-ui/icons/PanTool';
//styles
import { makeStyles } from "@material-ui/core/styles";
import commonStyles from "assets/theme/views/admin/common.js";
//layout
import Header from "components/Headers/Header.js";
//api request
import { getRequest, deleteRequest, approveRequest, revokeRequest } from 'apis/account'
//static configuration data
import { columns } from 'modules/static/account'
//hoc component
import DataController from 'components/DataController'

 
const useStyles = makeStyles(commonStyles)

const AccountPage = (props) => {
    const { data, requestAPI } = props
    const commonC = useStyles()
    /*data change*/
    return (
        <>
            <Header />
            {/* Page content */}
            <Container
                maxWidth={false}
                component={Box}
                marginTop="-6rem">
                <MaterialTable
                    columns={columns}
                    data={data}
                    title="계정 관리"
                    actions={[
                        rowData => ({
                            icon: PermIdentityIcon,
                            tooltip: '권한 허용',
                            onClick: (event, rowData) => requestAPI(approveRequest, [rowData['UUID'], rowData['groupCode']]),
                            disabled: (rowData['groupRequest'] !== 'wait')
                        }),
                        rowData => ({
                            icon: PanToolIcon,
                            tooltip: '권한 회수',
                            onClick: (event, rowData) => requestAPI(revokeRequest, [rowData['UUID']]),
                            disabled: (rowData['groupRequest'] !== 'done')
                        }),
                        {
                            icon: 'delete',
                            tooltip: '사용자 제거',
                            onClick: (event, rowData) => requestAPI(deleteRequest, [rowData['UUID']])
                        }
                    ]}
                    options={{
                        actionsColumnIndex: -1,
                        headerStyle: {
                            backgroundColor: '#eee',
                        },
                    }}
                    localization={{ header: { actions: "" } }}
                    components={{
                        Toolbar: props => (
                            <div className={commonC.toolbar}><MTableToolbar {...props} /></div>
                        )
                    }}
                />
            </Container>
        </>
    )

}

export default DataController(AccountPage, {
    dataRequest: getRequest,
    dataTransform : (res) => res.data.data
})