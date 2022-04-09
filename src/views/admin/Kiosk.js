//react library
//@material-ui components
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
//styles
import { makeStyles } from "@material-ui/core/styles";
//api request
import { deleteRequest, getRequest, setRequest } from 'apis/kiosk';
import commonStyles from "assets/theme/views/admin/common.js";
//hoc component
import DataController from 'components/DataController';
//layout
import Header from "components/Headers/Header.js";
import MaterialTable, { MTableToolbar } from 'material-table';
//static configuration data
import { columns, sample_data } from 'modules/static/kiosk';
import React, { useState } from "react";
import CreateTerminal from 'views/admin/popup/CreateTerminal';

const useStyles = makeStyles(commonStyles)

const KioskPage = (props) => {
    const { data, requestAPI } = props
    const commonC = useStyles()
    const [open, setOpen] = useState(false)

    /*data change*/
    return (
        <>
            <CreateTerminal open={open} onClose={()=>setOpen(false)} onSubmit={info=> requestAPI(setRequest, info, true)}/>
            <Header />
            {/* Page content */}
            <Container
                maxWidth={false}
                component={Box}
                marginTop="-6rem">
                <MaterialTable
                    columns={columns}
                    data={sample_data}
                    title="KIOSK 목록"
                    actions={[
                        {
                            icon: 'delete',
                            tooltip: '단말기 제거',
                            onClick: (event, rowData) => requestAPI(deleteRequest, [rowData['kiosk_SN']])
                        }, {
                            icon: 'add',
                            tooltip: '단말기 생성',
                            isFreeAction:true,
                            onClick: (event, rowData) => setOpen(true)
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

export default DataController(KioskPage, {
    dataRequest: getRequest,
    dataTransform : (res) => res.data.data
})