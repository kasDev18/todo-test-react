import { Grid2 as Grid, Box, TextField, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Create() {
  return (
    <Grid container style={{ display: "flex", justifyContent: "center" }}>
      <Grid size={8}>
        <h1>Create a Todo</h1>
        <TextField style={{ width: '100%' }} id="standard-basic" label="Standard" variant="standard" required/>
      </Grid>
    </Grid>
  );
}
