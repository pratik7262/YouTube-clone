import { AiFillYoutube } from 'react-icons/ai'

import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

import {
    appBar, toolbarWrapper, flexAlignCenter, logoText, hideOnMobile
} from '@styles/styles.js'
import { Menu } from '@mui/icons-material'
import { SearchBar } from './SearchBar'
import { UserProfile } from '@components/UserProfile'
import { NotificationsList } from '@components/NotificationsList'
// import { Upload } from '@components/Upload'

export const AppNavBar = (props) => {
    return (
        <AppBar component='nav' sx={appBar}>
            <Toolbar>
                <Box sx={toolbarWrapper}>
                    <Box sx={flexAlignCenter}>
                        <IconButton color='inherit'
                            aria-label='open drawer'
                            onClick={props.handleDrawerToggle}
                            edge='start'
                            sx={{ mr: 2 }}>
                            <Menu />
                        </IconButton>
                        <AiFillYoutube color='red' size={32} />
                        <Typography variant='h6' component='div' sx={logoText}>YouTube</Typography>
                    </Box>
                    <Box sx={hideOnMobile}>
                        <SearchBar />
                    </Box>
                    <Box sx={hideOnMobile}>
                        {/* <Upload/> */}
                        <NotificationsList/>
                        <UserProfile />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
