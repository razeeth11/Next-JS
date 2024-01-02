import { Box, Grid } from "@mui/material";
import Links from "./links/Links";


export default function NavBar(){
  return(
    <Box>
      <Grid container style={{display : 'flex' , alignItems : 'center',justifyContent : 'space-between'}}>
        <Grid xs={2}>
          LOGO
        </Grid>
        <Grid xs={10}>
          <Links/>
        </Grid>
      </Grid>
    </Box>
  )
}