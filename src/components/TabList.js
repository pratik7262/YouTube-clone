import React, { useState } from 'react'
import { tabItems } from "../data/app.data";
import { Box, Tab, Tabs } from '@mui/material';

export const TabList = () => {
  const [value, setValue] = useState(false)

  const onChange=(e,nv)=>{
    setValue(nv);
  }
  return (
    <Box >
        <Tabs value={value} onChange={onChange} scrollButtons={true} allowScrollButtonsMobile aria-label='scrollable tabs' variant='scrollable'>
            {tabItems.map((tab)=>{
               return <Tab key={tab.id} label={tab.text}/>
            })}
        </Tabs>
    </Box>
  
  )
}
