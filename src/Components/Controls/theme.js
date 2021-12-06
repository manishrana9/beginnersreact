import {  createTheme } from '@mui/material';
import { fontSize } from '@mui/system';
export const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
            backgroundColor:'#8daee0',
            fontSize:'1rem',
            color:'#212121'

          },
        },
      },
    },
  });