import { useContext } from "react";
import { Paper, Grid, Typography } from "@mui/material";

import { AppContext } from "../../context";

const Info = () => {
  const { data } = useContext(AppContext);
  const dataIsEmpty = Object.keys(data).length === 0;

  if (dataIsEmpty) return <p>Loading...</p>;
  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: "87%",
        mx: "auto",
        padding: 4,
        borderRadius: 2,
        position: "relative",
        top: -80,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} lg={4} sx={{ borderRight: "1px solid #d3d3d3" }}>
          <Typography variant="subtitle1" color="gray">
            Ip Address
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {data.ip}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={2} sx={{ borderRight: "1px solid #d3d3d3" }}>
          <Typography variant="subtitle1" color="gray">
            Location
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {data.location.region}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3} sx={{ borderRight: "1px solid #d3d3d3" }}>
          <Typography variant="subtitle1" color="gray">
            Timezone
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            UTC {data.location.timezone}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={2}>
          <Typography variant="subtitle1" color="gray">
            ISP
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {data.isp}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Info;
