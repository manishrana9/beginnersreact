import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
class Table1 extends Component {
    render() {
        return (
            <div>
                     <TableContainer component={Paper}>
                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
                     <TableBody>
                     <TableRow>
                     <TableCell align="left"><b>First Name:</b>Manish</TableCell>
                     <TableCell align="left"><b>Last Name:</b>Rana</TableCell>
                     <TableCell align="left"><b>Last Name:</b>Rana</TableCell>
                     <TableCell align="left"><b>Last Name:</b>Rana</TableCell>
                     </TableRow>
                     <TableRow>
                     <TableCell align="left"><b>First Name:</b>Manish</TableCell>
                     <TableCell align="left"><b>Last Name:</b>Rana</TableCell>
                     <TableCell align="left"><b>Last Name:</b>Rana</TableCell>
                     <TableCell align="left"><b>Last Name:</b>Rana</TableCell>
                     </TableRow>
                     </TableBody>
                     </Table>
                     </TableContainer>
            </div>
        )
    }
}

export default Table1
