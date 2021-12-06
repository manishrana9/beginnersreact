import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

//   const jsx = `
// <Grid container spacing={${spacing}}>
// `;

  return (
    <Grid container spacing={2} sx={{  flexGrow: 1, border:'6px solid green' }}>
      <Grid item xs={12} sx={{border:'6px solid blue' }} >
        <Grid container justifyContent="center" spacing={spacing} sx={{border:'6px solid pink' }}>
          {[0, 1, 2].map((value) => (
            <Grid item key={value} sx={{border:'6px solid yellow' }} >
              <Paper sx={{ height: 140, width: 100 }} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ flexGrow: 1, border:'6px solid purple' }}>
        <Paper sx={{ p: 2 }} sx={{ flexGrow: 1, border:'6px solid black' }}>
          <Grid container sx={{ flexGrow: 1, border:'6px solid red' }}>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                  row
                >
                  {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
        {/* <HighlightedCode code={jsx} language="jsx" /> */}
      </Grid>
    </Grid>
  );
}
