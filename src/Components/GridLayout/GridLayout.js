import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paperitem } from './ConstantLayout'

const data = [
    {
        name: 'Manish'
    },
    {
        name: 'Rana'
    }
]
class GridLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data1: data
        }
    }
    render() {
        // const postui = this.state.data1.map((dt) => {
        //     return dt ? <Grid key={dt.name} item xs={8} sx={{ border: '6px solid red' }}> <Paperitem>{dt.name}</Paperitem></Grid> : null
        // })

        return (
            <div>
                <Box sx={{ flexGrow: 1 ,border: '', height: '300px', }}>
                    <Grid container direction ='row' margin='1px' justifyContent='flex-start' alignItems='flex-start' rowSpacing={{xs: 1, sm: 1, md: 1}} columnSpacing={{ xs: 1, sm: 2, md: 1 }} columns={{ xs: 4, sm: 8,md:16 }} sx={{ border: '6px solid black',height:'300px',bgcolor:'#595F5C' }}>
                        {/* {postui} */}
                        <Grid item xs={8} md={2} sm={4} sx={{ border: '6px solid pink'}}>  
                            <Paperitem>Manish</Paperitem>                            
                        </Grid>
                        <Grid item xs={4} md={2} sm={4} sx={{ border: '6px solid pink'}}>  
                            <Paperitem>rana</Paperitem>                            
                        </Grid>
                        <Grid item xs={4} md={2} sm={4} sx={{ border: '6px solid pink'}}>  
                            <Paperitem>Darshana</Paperitem>                            
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }
}

export default GridLayout
