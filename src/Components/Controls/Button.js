import React, { Component } from 'react'
import { Stack, Button, Divider, Box, Grid, styled, ButtonGroup ,ThemeProvider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { PhotoCamera } from '@mui/icons-material/';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import { purple } from '@mui/material/colors';
import {theme} from './theme'
import './button.css'
const Input = styled('input')({
    display: 'none',
});

// const theme = createTheme({
//     components: {
//       MuiButton: {
//         styleOverrides: {
//           root: {
//             fontSize: '1rem',
//             backgroundColor:'#FFA900'
//           },
//         },
//       },
//     },
//   });

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

class MUIButton extends Component {
    render() {
        return (
            <div>
                <Stack spacing={1} direction="row" divider={<Divider orientation="vertical" flexItem />}>
                    <ThemeProvider theme={theme}><Button  >Text</Button>
                    <Button  >Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                    </ThemeProvider>
                    <Button href="#text-buttons">Link</Button>
                    <Button disableElevation variant="contained">Disabled Elevation</Button>
                    <Button color="secondary" variant="outlined">Outlined</Button>
                    <Button color="success" variant="outlined">Outlined</Button>
                    <Button color="error" variant="outlined">Outlined</Button>
                </Stack>
                <Box className="button1" sx={{ '& button': { m: 1 }, border: '6px solid black' }}>
                    <Grid container xs={6} md={12} sm={6} sx={{ border: '6px solid pink' }} >
                        <Grid item md={6} sm={4} sx={{ border: '6px solid green' }}>
                            <Button size="small">Small</Button>
                            <Button size="medium">Medium</Button>
                            <Button size="large">Large</Button>
                        </Grid>
                    </Grid>
                </Box>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="contained" component="span">
                        Upload
                    </Button>
                </label>
                <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton>
                <ColorButton variant="contained">Custom CSS</ColorButton>
                <div>
                    <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <ButtonGroup  orientation="vertical" size="small" variant="text" aria-label="outlined primary button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}

export default MUIButton
