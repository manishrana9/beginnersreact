import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const Paperitem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: 'theme.palette.text.secondary'
    // boxShadow:1555
  }));