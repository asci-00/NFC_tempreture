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
//user component
import alert from 'func/common'
//api request
import { getRequest, deleteRequest, setRequest } from 'apis/kiosk'
//static configuration data
import { columns } from 'modules/static/kiosk'
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
                    title="KIOSK 목록"
                    actions={[
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