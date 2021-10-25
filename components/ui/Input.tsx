import { useRef, FormEvent, useContext } from "react";
import { FormControl, OutlinedInput, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { AppContext } from "../../context";

const Input = () => {
  const ipAddressRef = useRef<HTMLInputElement>(null);

  const context = useContext(AppContext);
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const enteredIpAddress = ipAddressRef.current!.value;

    if (enteredIpAddress.trim().length === 0) return;
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_bAZzx5GQCnFyTVK25Qx5XXRyA2wxw&ipAddress=${enteredIpAddress}`
    );
    const resonse = await res.json();

    context.fetchAddress(resonse);
    ipAddressRef.current!.value = "";
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      component="form"
      sx={{
        display: "flex",
        flexDirection: "row",
        maxWidth: 500,
        width: "95%",
      }}
      onSubmit={handleSubmit}
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
        inputRef={ipAddressRef}
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
