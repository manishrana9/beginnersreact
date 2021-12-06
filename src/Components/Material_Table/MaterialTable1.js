import React, { Component } from 'react'
import  MaterialTable,{MTableToolbar} from 'material-table'
import {tableIcons,data} from './ConstantValues'
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {matcolumn} from './DefaultValues'
import Chip from '@mui/material/Chip';

class MaterialTable1 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      selectedRow:null
    }
  }

  customtoolbar=(props)=>{
    return <div>
    <MTableToolbar {...props} />
    <div style={{padding: '0px 10px'}}>
      <Chip label="Chip 1" color="secondary" style={{marginRight: 5}}/>
      <Chip label="Chip 2" color="secondary" style={{marginRight: 5}}/>
      <Chip label="Chip 3" color="secondary" style={{marginRight: 5}}/>
      <Chip label="Chip 4" color="secondary" style={{marginRight: 5}}/>
      <Chip label="Chip 5" color="secondary" style={{marginRight: 5}}/>
    </div>
  </div>
  }
  
    render() {
        return (
            <div style={{ maxWidth: '100%' }}>
            <MaterialTable 
            icons={tableIcons}
            columns={matcolumn}
            data={data}
            actions={[
                {
                  icon: SaveIcon,
                  tooltip: 'Save User',
                  onClick: (event, rowData) => alert("You saved " + rowData.name)
               },
               {
                icon: AddIcon,
                tooltip: 'Add User',
                isFreeAction: true,
                onClick: (event) => alert("You want to add a new row")
              },
                            rowData => ({
                icon: DeleteIcon,
                tooltip: 'Delete User',
                onClick: (event, rowData) => alert("You want to delete " + rowData.name),
                disabled: rowData.birthYear < 2000
              })
              ]}
              components={{
                Toolbar: props => (this.customtoolbar(props))
                 }}
                 editable={{
                  onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                       // setData([...data, newData]);
                        
                        resolve();
                      }, 1000)
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const dataUpdate = [...data];
                        const index = oldData.tableData.id;
                        dataUpdate[index] = newData;
                       // setData([...dataUpdate]);
                                 resolve();
                      }, 1000)
                    }),
                    onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
             // setData([...dataDelete]);
              
              resolve()
            }, 1000)
          })
                  
                  }}
              options={{
                actionsColumnIndex: -1
              }}

              title="Demo Title"

            />
          </div>
        )
    }
}

export default MaterialTable1
