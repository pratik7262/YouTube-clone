import { Box, Grid } from '@mui/material'
import { AppCard } from "./AppCard";
import React from 'react'

export const AppCardList = ({items}) => {
  return (
    <Box>
        <Grid container rowSpacing={1} columnSpacing={{xs:2,sm:4}}>
            {
                items.length && items.map((item)=>{
                    const key=item.etag;
                    const videoId=item.Id;
                    const {thumbnails,title,channelTitle}=item.snippet;
                    return(
                        <>
                         <Grid key={key} xs={12} sm={6} md={4} xl={3} item >
                            <AppCard 
                                url={thumbnails.high.url}
                                title={title}
                                channelTitle={channelTitle}
                                videoId={videoId}
                            />
                         </Grid>
                        </>
                    )
                })
            }
        </Grid>
    </Box>
  )
}
