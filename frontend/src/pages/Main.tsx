
import { Box, Typography,useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Header from "../components/Header";

const Main = () => {
    const theme = useTheme();
    const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
    return (

      <Box width={"100%"} height={"100%"}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            mx: "auto",
            mt: 3,
          }}
        >
          
      <Typography variant="h4" sx={{ mb: 2 }}>Welcome to Farmbot</Typography>
          
          <Box sx={{ display: "flex", mx: "auto" }}>
            <img
              src="https://compote.slate.com/images/995b8efe-b37b-4dc5-b9c3-e2d9e8fb2df9.gif?crop=1560%2C1040%2Cx0%2Cy0"
              alt="Welcome to Farm-bot, the robot for farmers"
              style={{
                display: "flex",
                margin: "auto",
                width: isBelowMd ? "80%" : "60%",
                borderRadius: 20,
                boxShadow: "-5px -5px 105px #64f3d5",
                marginTop: 20,
                marginBottom: 20,
                padding: 10,
              }}
            />
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Main;