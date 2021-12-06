import * as React from 'react';
import { DataGrid,GridToolbarFilterButton,GridToolbarContainer,GridToolbarDensitySelector,GridToolbarExport } from '@mui/x-data-grid';
import {columns,rows} from './Data'
import { Button } from '@material-ui/core';
import { Grid } from '@mui/material';
export default function ControlledSelectionGrid() {
  const [selectedRows, setSelectedRows] = React.useState([]);

  const testjson=()=>{
    alert(JSON.stringify(selectedRows, null, 4))     
    //alert('Hello')
}

  const mybutton=(props)=>{
    // console.log(props.Toolbar1)
    return (
        <div>
        <GridToolbarContainer>
        <GridToolbarFilterButton/>
        <GridToolbarDensitySelector />
  

        </GridToolbarContainer>
          <Grid container>
          <Grid item md={2}>

          <Button  size="small" onClick={testjson} variant="contained" color="primary">Submit Selected</Button>
          </Grid>
          <Grid item md={2}>
          <Button  size="small" onClick={testjson} variant="contained" color="primary">Submit All</Button>

          </Grid>
     </Grid>     
     </div> 
    )        
}

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[50]}
        checkboxSelection
        components={{
            Toolbar: mybutton,
          }}  
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRows = rows.filter((row) =>
            selectedIDs.has(row.id),
          );
            
          setSelectedRows(selectedRows);
        }}
        // {...data}
      />
      <pre style={{ fontSize: 10 }}>
        {JSON.stringify(selectedRows, null, 4)}
      </pre>
    </div>
  );
}
