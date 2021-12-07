import React, { Component } from 'react'
import { DataGrid,GridToolbar,GridToolbarFilterButton,GridToolbarContainer  } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import {columns,rows} from './Data'
import { Button } from '@material-ui/core';


export class DataGrid1 extends Component {

    constructor(props) {
        super(props) 
    
        this.state = {
            selectedRows:[]
        }
    }
 
    testjson=()=>{
        alert(JSON.stringify(this.state.selectedRows, null, 4))     
        //alert('Hello')
    }
    
    mybutton=(props)=>{
        // console.log(props.Toolbar1)
        return (
            <Grid container>
                 <Grid item md={2}>
                 <Button  size="small" onClick={this.testjson} variant="contained" color="primary">Submit Selected</Button>
                 </Grid>
                 <Grid item md={2}>
                 <Button  size="small" onClick={this.testjson} variant="contained" color="primary">Submit All</Button>
                 </Grid>
            </Grid>
        )        
    }

     handleRowSelection = (params) => {
        // prints correct indexes of selected rows
         console.log(params);
         
         // missing the first row selected
        //  setSelection(e.selectionModel);
        //  console.log(select);
 
     }
    render() {
        return (
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={100}
              rowsPerPageOptions={[50]}
              checkboxSelection
              components={{
                Toolbar: this.mybutton,
              }}            
              //onRowClick={(params)=>{this.handleRowSelection(params)}}
              onSelectionModelChange={(ids) => {
                  //console.log(ids)
                const selectedIDs = new Set(ids);
               // console.log(selectedIDs)
                const selectedRows1 = rows.filter((row) =>
                    //console.log(row.id)
                    selectedIDs.has(row.id)
                );
                    this.setState({
                        selectedRows:selectedRows1
                    },()=>{console.log(this.state.selectedRows)})
                   // console.log(this.selectedRows)
                //setSelectedRows(selectedRows);
              }}
              //onStateChange={(state)=>{console.log(state)}}
              //selectionModel={()=>{getRowId()}}
            //   componentsProps={{
            //     Toolbar: { background: 'red', counter: rows.length },
            //   }}
            //   disableSelectionOnClick
            />
      <pre style={{ fontSize: 10 }}>
        {JSON.stringify(this.state.selectedRows, null, 4)}
      </pre>
          </div>
        )
    }
}

export default DataGrid1
