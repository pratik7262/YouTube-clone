import "./App.css";
import { React, useState } from "react";
import { Box, useMediaQuery, } from "@mui/material";
import { NotResponsive } from "./components/NotResponsive";
import { appWrapper } from "./styles/styles";
import { AppContentArea } from "./components/AppContentArea";
import { AppNavBar } from "./components/navigation/AppNavBar";

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
