import { DataGrid } from '@mui/x-data-grid';
import React, { Component } from 'react'


class DataGridPro extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    rows = [
        { id: 1, Name: 'Manish', City: 'Gurgaon' },
        { id: 2, Name: 'Arun', City: 'MN' },
        { id: 3, Name: 'Rana', City: 'NJ' },
      ];
    
      columns = [
        { field: 'Name', headerName: 'Name', width: 150 },
        { field: 'City', headerName: 'City', width: 150 },
      ];
    
    
    render() {
        return (
            <div>
                 <div style={{ height: 300, width: '100%' }}>
                 <div style={{ display: 'flex', height: '100%' }}>
                 <div style={{ flexGrow: 1 }}>
                <DataGrid rows={this.rows} columns={this.columns} />
                </div>
                </div>
    </div>
            </div>
        )
    }
}

export default DataGridPro
