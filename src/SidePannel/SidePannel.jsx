import React from 'react'
import { Box, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';




const SidePannel = ({open, setOpen}) => {
  return (
    <Box 
    position='fixed'
    top='0'
    left='0'
    bottom='0'
    minWidth='300px'
    maxWidth='500px'
    height='100vh'
    sx={{backgroundColor:'#0d0243'}}
    >
    <Box display='flex' justifyContent='flex-start' alignContent='center' margin='20px 10px'>
        <IconButton onClick={()=>setOpen(!open)}>
            <CloseIcon sx={{fontSize:'30px' , color:'whitesmoke'}}/>
        </IconButton>
    </Box>
    </Box>
  )
}

export default SidePannel
