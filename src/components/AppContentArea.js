import React from 'react'
import { Box } from '@mui/material';
import { appContentWrapper, flexColumnGrow } from "../styles/styles";
import { SideBar } from './SideBar';
import { TabList } from './TabList';
import { AppCardList } from './AppCardList';
import { youtubeResponse } from "../data/app.data";

export const AppContentArea = ({ isOpen }) => {
  const item1=youtubeResponse.slice(0,8)
  const item2=youtubeResponse.slice(8)
  const sideBarWidth = isOpen ? '70px' : '250px'
  const contentWidth=isOpen ? '1500px' : '1300px'
  console.log(`calc(100vw-${sideBarWidth}`)
  return (
    <Box component='main' sx={appContentWrapper}>
      <Box component='div' sx={{
       flexBasis:sideBarWidth,
       flexGrow:0,
       flexShrink:0,
       overflowY:'auto'
      }}>
        <SideBar />
      </Box>
      <Box sx={flexColumnGrow}>
        <Box sx={{ my: 2, width: `calc(100-${sideBarWidth})` }}>
          <TabList />
        </Box>
        <Box sx={{flexGrow:1, p:1, overflowY:'auto', overflowX:'hidden', width:contentWidth}}>
            <AppCardList items={item1}/>
            <AppCardList items={item2}/>
        </Box>
      </Box>
    </Box>
  )
}
