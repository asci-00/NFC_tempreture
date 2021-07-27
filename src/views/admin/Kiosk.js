import React from "react";
import { useSelector } from 'react-redux'
//react library
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import componentStyles from "assets/theme/views/admin/dashboard.js";
import MaterialTable from 'material-table';
//@material-ui components
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import PanToolIcon from '@material-ui/icons/PanTool';
//icons
import Header from "components/Headers/Header.js";
//import ManageGroup from "components/account/groupManage"
//user component
import { columns, sample_data } from 'modules/static/account';
//debuging data
import { getUsers, updatePermission, removeUser } from 'apis/User'

const useStyles = makeStyles(componentStyles);

const Tables = ({onUpdate, data=[], requestAPI, openDialog, openError}) => {
  const classes = useStyles();
  const UUID = useSelector(state => state.auth.uuid)

  const onPermissionUpdate = ({uuid, code}, action) => {
          updatePermission({ UUID, targetUUID : uuid, targetGroupCode : code, action }).then(res => {
            openDialog('권한 업데이트 완료')
            onUpdate()
          }).catch(err => openError(err))
        },
        onUserRemove = ({uuid}) => {
          removeUser({ UUID, targetUUID : uuid}).then(res => {
            openDialog('유저 삭제 완료')
            onUpdate()
          }).catch(err => openError(err))
        }


  return (
    <>
      <Header />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        // classes={{ root: classes.containerRoot }}
      >
        <MaterialTable
          columns = {columns} data = {sample_data} title={<div className={classes.title}>관리자 목록</div>}
          actions={[
            rowData => ({
              icon: PermIdentityIcon,
              tooltip: '권한 허용',
              onClick: (event, rowData) => onPermissionUpdate(rowData, 'GRANT'),
              disabled : (rowData['groupRequest'] !== 'wait')
            }),
            rowData => ({
              icon: PanToolIcon,
              tooltip: '권한 회수',
              onClick: (event, rowData) => onPermissionUpdate(rowData, 'REVOKE'),
              disabled : (rowData['groupRequest'] !== 'done')
            }),
            {
              icon: 'delete',
              tooltip: 'Delete User',
              onClick: (event, rowData) => onUserRemove(rowData)
            }
          ]}
          options={{
            actionsColumnIndex: -1,
            headerStyle: {
              backgroundColor: '#eee',
            },
          }}
          localization={{header: {actions: ""}}}
        />
      </Container>
    </>
  );
};

export default Tables;
