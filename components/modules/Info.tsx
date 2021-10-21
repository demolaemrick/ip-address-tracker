import { Paper, Grid, Typography, Divider } from "@mui/material";
import React from "react";

const Info = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: "80%",
        mx: "auto",
        padding: 4,
        textAlign: "center",
        borderRadius: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
          <Typography variant="subtitle1" color="gray">
            Ip Address
          </Typography>
          <Typography variant="h4">192.212.174.101</Typography>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Typography variant="subtitle1" color="gray">
            Location
          </Typography>
          <Typography variant="h4">Brooklyn, NY 10001</Typography>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Typography variant="subtitle1" color="gray">
            Timezone
          </Typography>
          <Typography variant="h4">UTC -05:00</Typography>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Typography variant="subtitle1" color="gray">
            ISP
          </Typography>
          <Typography variant="h4">SpaceX Starlink</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Info;
