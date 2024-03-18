import React, { useState } from 'react'
import { Accordion, AccordionSummary, Box, Button, IconButton, Typography, AccordionDetails } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const SidePannel = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <Box 
    display='flex'
    justifyContent='flex-start'
    alignItems='start'
    flexDirection='column'
    minWidth='300px'
    maxWidth='600px'
    height='100vh'
    padding='1rem 1rem'
    gap='3rem'
    sx={{backgroundColor:'#0d0243'}}
    >
    <Box display='flex' justifyContent='center' alignContent='center'>
        <h1>Logo</h1>
    </Box>

<Box border='1px solid pink' width='80%'>
  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{backgroundColor:'transparent', color:'whitesmoke', border:'1px solid grey'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'whitesmoke'}}/>}> 
              <Typography variant='h5'>Navbar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
              <Button>Navbar 1</Button>
              <Button>Navbar 2</Button>
              <Button>Navbar 3</Button>
              <Button>Navbar 4</Button>
              <Button>Navbar 5</Button>

          </Box>
        </AccordionDetails>
  </Accordion>
</Box>

    </Box>
  )
}

export default SidePannel
