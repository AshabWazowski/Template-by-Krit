import './App.css';
import {Box, IconButton, MenuItem} from '@mui/material';
import SidePannel from './SidePannel/SidePannel';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';



function App() {
  const [open , setOpen] = useState(false);


  return (
    <div className="App">
    <Box margin='20px 10px'>
        <IconButton onClick={()=>setOpen(!open)}>
          <MenuIcon sx={{color:'whitesmoke', fontSize:'30px'}}/>
        </IconButton>
    </Box>
      <Box display='flex' justifyContent='center' alignContent='center' width='100%' border='2px solid blue'>
     
    {/* SIDE PANNEL CONTROL */}
      <Box>
      {open && 
        <SidePannel setOpen={setOpen} open={open}/>
      }
      </Box>

    {/*COMPOINENT SIDE CONTROL */}
      <Box>      
      </Box>


      </Box>
    </div>
  );
}

export default App;
