import { Avatar, Button, Divider, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from '@mui/material'
import { inlineText } from "../styles/styles";
import { FaUserCircle } from "react-icons/fa";
import { userProfileItems } from "../data/app.data";
import { Box } from '@mui/system'
import React from 'react'
import { useToggle } from "../hooks/useToggle";

export const UserProfile = () => {
    const {el,open,onClick,onClose}=useToggle();
    return (
        <Box sx={{ px: 1 , mt:1 }}>
            <Button id='basic-button' onClick={onClick}>
                <FaUserCircle size={24} />
            </Button>
            <Menu anchorEl={el} id='basic-menu' open={open} onClose={onClose} MenuListProps={{ 'aria-labelledby': "basic-button" }}>
                <ListItem sx={{ pt: 1, pb: 1 }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar >PS</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Pratik Shinde' secondary={<Typography sx={inlineText} component='span'>
                        <Link href='#' underline='none'>
                            Manage your Google Account
                        </Link>
                    </Typography>} />
                </ListItem>
                <Box sx={{ minWidth: 300, borderTop: "1px solid #ddd" }}>
                    {
                        userProfileItems.map((item) => {
                            return (
                                <List sx={{ p: 0 }} key={item.id}>
                                    {
                                        item.divider ? <Divider /> : 
                                        (<ListItem>
                                            <ListItemButton>
                                                <ListItemIcon>{item.icon}</ListItemIcon>
                                                <ListItemText>{item.text}</ListItemText>
                                            </ListItemButton>
                                        </ListItem>)
                                    }
                                </List>
                            )
                        })
                    }
                </Box>
            </Menu>
        </Box>
    )
}
