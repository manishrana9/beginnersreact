import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// import { height } from '@mui/system';

export default function Demo() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        ":hover": {
          boxShadow: 6},
        fontWeight: 'bold',     
        fontStyle:'italic' ,
        border:'6px solid green',
        boxShadow: 14,
        // height:'800px'
      }} 
      // border='6px solid black'
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          ":hover":{
            border:'6px solid yellow'
          },
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          border:'6px solid pink',
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        //  border='6px solid black'
      />
      <Box
        sx={{    
          display: 'flex',      
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 3,
          minWidth: { md: 350 },
          border:'6px solid blue',
        }}
        
      >
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
          123 Main St, Phoenix AZ
        </Box>
        <Box component="span" sx={{ color: 'primary.main', fontSize: 22, }}>
          $280,000 — $310,000
        </Box>
        <Box 
          sx={{
            mt: 1.5,
            p: 0.5,
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            borderRadius: '5px',
            color: 'primary.main',
            fontWeight: 'medium',
            display: 'flex',
            fontSize: 12,
            alignItems: 'center',
            '& svg': {
              fontSize: 21,
              mr: 0.5,
            },
          }}
        >
          <ErrorOutlineIcon />
          CONFIDENCE SCORE 85%
        </Box>
      </Box>
    </Box>
  );
}
