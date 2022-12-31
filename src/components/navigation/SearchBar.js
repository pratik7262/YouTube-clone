import { Box } from '@mui/system'
import React from 'react'
import {BsFillMicFill  } from "react-icons/bs";
import { flexAlignCenter, searchBar } from "@styles/styles.js";
import { Button, IconButton, InputBase, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';

export const SearchBar = () => {
    return (
        <Box sx={flexAlignCenter}>
            <Paper component='form' sx={searchBar}>
                <InputBase sx={{ ml: 1, flex: 1, pl: 1 }} placeholder='Search...'></InputBase>
                <IconButton type='button' sx={{ backgroundColor: '#eee', borderRadius: 0 }}>
                    <Search />
                </IconButton>
            </Paper>
            <Button sx={{minWidth:'auto'} }>
                <BsFillMicFill size={18}/>
            </Button>
        </Box>
    )
}
