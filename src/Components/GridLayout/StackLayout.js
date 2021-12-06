import React, { Component } from 'react'
import { Paperitem } from './ConstantLayout'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

class StackLayout extends Component {
    render() {
        return (
            <div>
                <Stack  direction={{ xs: 'column', sm: 'row',md:'row' }} mt={2} divider={<Divider orientation="vertical" flexItem />} justifyContent='flex-start' alignItems='flex-start'  spacing={2} border='6px solid black'>
                    <Paperitem>Manish</Paperitem>
                    <Paperitem>Rana</Paperitem>
                    <Paperitem>Darshana1</Paperitem>
                    <Paperitem>Manish</Paperitem>
                    <Paperitem>Rana</Paperitem>
                    <Paperitem>Darshana1</Paperitem>
                    <Paperitem>Manish</Paperitem>
                    <Paperitem>Rana</Paperitem>
                    <Paperitem>Darshana1</Paperitem>
                </Stack>
            </div>
        )
    }
}

export default StackLayout
