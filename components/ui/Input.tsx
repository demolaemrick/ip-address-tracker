import { FormControl, OutlinedInput, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Input = () => {
  return (
    <FormControl
      variant="outlined"
      size="small"
      sx={{
        display: "flex",
        flexDirection: "row",
        maxWidth: 500,
        width: "95%",
      }}
    >
      <OutlinedInput
        sx={{
          backgroundColor: "#fff",
          flexGrow: 8,
          borderRadius: "10px 0 0 10px",
          border: 0,
          outline: "none",
        }}
        placeholder="Search for any IP address or domain"
      />
      <Box
        sx={{
          backgroundColor: "#000",
          borderRadius: 1,
          flexGrow: 1,
        }}
      >
        <ArrowForwardIosIcon
          sx={{
            color: "#fff",
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "0px 10px",
          }}
        />
      </Box>
    </FormControl>
  );
};

export default Input;
