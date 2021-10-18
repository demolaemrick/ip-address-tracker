import { Typography, Box } from "@mui/material";
import Input from "../../ui/Input";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Typography variant="h1" color="white" align="center">
        IP Address tracker
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 4,
        }}
      >
        <Input />
      </Box>
    </header>
  );
};

export default Header;
