import { Box, Grid, Typography ,TextField} from "@mui/material";

export default function Person_Details() {
  return (
    <Box  component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
      <Grid container spacing={4}>
        <Grid item xs={12}>
            <Typography variant="h5" style={{fontFamily:'poppins'}}>Person Details</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
          fullWidth
            id="outlined-read-only-input"
            label="Name"
            defaultValue="Ranjana Tomar"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
          fullWidth
            id="outlined-read-only-input"
            label="Email"
            defaultValue="Rajanatomar@987@gmail.com"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
          fullWidth
            id="outlined-read-only-input"
            label="Password"
            defaultValue="**********"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
          fullWidth
            id="outlined-read-only-input"
            label="Address"
            defaultValue="new resham mil pragti nagar ,gwalior"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
