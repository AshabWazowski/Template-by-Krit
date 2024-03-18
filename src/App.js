import './App.css';
import {Box, IconButton, MenuItem} from '@mui/material';
import SidePannel from './SidePannel/SidePannel';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';



function App() {
  const [open , setOpen] = useState(false);


  return (
    <div className="App">
      <Box display='flex' justifyContent='center' alignContent='center' width='100%' border='2px solid blue'>
     
    {/* SIDE PANNEL CONTROL  "LEFT" */}
      <Box>
       
        <SidePannel setOpen={setOpen} open={open}/>
      
      </Box>

    {/*COMPOINENT SIDE CONTROL "RIGHT" */}
      <Box border='1px solid purple' width='100%' padding='1rem 5%'> 
        <h1>Hello World</h1>     
      </Box>


      </Box>
    </div>
  );
}

export default App;
