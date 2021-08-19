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
import componentStyles from "assets/theme/views/admin/dashboard.js";
import commonStyles from "assets/theme/views/admin/common.js";
//layout
import Header from "components/Headers/Header.js";
//user component
import alert from 'func/common'
//api request
import { getRequest, deleteRequest, setRequest } from 'apis/account'
//static configuration data
import { columns } from 'modules/static/account'
//hoc component
import dataController from 'components/dataController'


const useStyles = makeStyles(componentStyles),
      useStyles2 = makeStyles(commonStyles)

const AccountPage = (props) => {
    const { data, requestAPI } = props
    const layoutC = useStyles(), commonC = useStyles2()

    const onPermissionUpdate = ({uuid, code}, action) => {
        alert({
          type : 'html',
          submitText : '승인',
          message : (
            <div>
              
            </div>
          ),
          onSubmit : () => {}
        })
    }
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
                    title={<div className={layoutC.title}>관리자 목록</div>}
                    actions={[
                        rowData => ({
                            icon: PermIdentityIcon,
                            tooltip: '권한 허용',
                            onClick: (event, rowData) => requestAPI(setRequest, { type: 'GRANT', data: { ...rowData } }),
                            disabled: (rowData['groupRequest'] !== 'wait')
                        }),
                        rowData => ({
                            icon: PanToolIcon,
                            tooltip: '권한 회수',
                            onClick: (event, rowData) => requestAPI(setRequest, { type: 'REVOKE', data: { ...rowData } }),
                            disabled: (rowData['groupRequest'] !== 'done')
                        }),
                        {
                            icon: 'delete',
                            tooltip: '사용자 제거',
                            onClick: (event, rowData) => requestAPI(deleteRequest, { data: { ...rowData } })
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
                            <div className={commonC.removeUnderline}><MTableToolbar {...props} /></div>
                        )
                    }}
                />
            </Container>
        </>
    )

}

export default dataController(Component, {
    dataRequest: getRequest,
})