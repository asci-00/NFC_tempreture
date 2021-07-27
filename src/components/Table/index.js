import MaterialTable from 'material-table';
import React from 'react';

export default function PositioningActionsColumn(props) {
    const { actions, ...etcProps} = props

    return (
      <MaterialTable
        { ...etcProps }
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },
          rowData => ({
            icon: 'delete',
            tooltip: 'Delete User',
            disabled: rowData.birthYear < 2000
          })
        ]}
        options={{
          actionsColumnIndex: -1,
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
          },
        }}
      />
    )
  }