import React from 'react'
import { useToggle } from "@hooks/useToggle";
import { Box } from '@mui/system';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { RiVideoUploadFill } from "react-icons/ri";
import { uploadMenuItems } from "@data/app.data";


export const Upload = () => {
    const { el, open, onClick, onClose } = useToggle();
    return (
        <Box sx={{ px: 1,mt:1}}>
            <Button id='basic-u-button' onClick={onClick}>
                <RiVideoUploadFill size={24}/>
            </Button>
            <Menu
                id='basic-u-menu'
                onClose={onClose}
                anchorEl={el}
                open={open}
                MenuListProps={{ 'aria-labelledby': 'basic-u-button' }}>
                {
                    uploadMenuItems.map((item) => {
                        return (
                            <MenuItem key={item.id} onClick={onClose}>
                                {
                                    item.icon &&
                                    <>
                                        <Box component='span' sx={{ mr: 1 }}>{item.icon}</Box>
                                        <Typography component='span' sx={{ textAlign: 'center', width: '100%' }}>
                                            {item.text}
                                        </Typography>
                                    </>

                                }
                            </MenuItem>
                        )
                    })
                }
            </Menu>
        </Box>
    )
}
