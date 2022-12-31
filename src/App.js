import "./App.css";
import { React, useState } from "react";
import { AppNavBar } from "@navigation/AppNavBar";
import { Box, useMediaQuery, } from "@mui/material";
import { appWrapper } from "@styles/styles.js";
import { AppContentArea } from "@components/AppContentArea";
import { NotResponsive } from "./components/NotResponsive";

function App() {
  const isGood =useMediaQuery('(min-width:1100px)');
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleDrawerToggle = () => {
    setSideBarOpen((v) => !v);
    console.log("first");
  };
  return (
    <Box sx={appWrapper}>
      {isGood ? (
        <>
          <AppNavBar handleDrawerToggle={handleDrawerToggle} />
          <AppContentArea isOpen={sideBarOpen} />
        </>
      ) : (
        <>
          <NotResponsive />
        </>
      )}
    </Box>
  );
}

export default App;
