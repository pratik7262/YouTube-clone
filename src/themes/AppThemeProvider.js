import React from 'react'
import { createTheme,ThemeProvider } from '@mui/material'
import { grey, pink } from '@mui/material/colors'

const theme=createTheme({
    typography:{
        allVariants:{
            fontFamily:'ROboto',
           fontSize:'14px',
           fontWeight:400
        }
    },
    palette:{
        primary:{
            main:grey[700]
        },
        secondary:{
            main:pink[500]
        },
    },
    components:{
        MuiTabs:{
            styleOverrides:{
                indicator:{
                    backgroundColor:'transparent'
                }
            }
        },
        MuiTab:{
            styleOverrides:{
                root:{
                    backgroundColor:'#eee',
                    borderRadius:30,
                    marginRight:'10px',
                    marginTop:'30px',
                    minHeight:'20px',
                    minWidth:'60px',
                    'active':{
                        backgroundColor:"black",
                        color:'white'
                    },
                    'focus':{
                        backgroundColor:"black",
                        color:'white'
                    },
                    'selected':{
                        backgroundColor:"black",
                        color:'white'
                    }
                },
               indicator:{
                backgroundColor:'transparent'
               }
            }
        }
    }
})

export const AppThemeProvider = (props) => {
  return (
   <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  )
}
