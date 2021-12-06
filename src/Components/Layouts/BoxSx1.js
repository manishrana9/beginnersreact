import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

export default function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          // display:'flex',
          // flexDirection: 'row',
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 1,
          p: 2,
          minWidth: 300,
          border:'6px solid',
          // justifyContent:'space-evenly'
        }}
      >
        <Box sx={{ color: 'text.secondary'}}>Sessions</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium', }}>
          98.3 K
        </Box>
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'medium',
            mx: 0.5,
            
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
          vs. last week
        </Box>
      </Box>
    </ThemeProvider>
  );
}
