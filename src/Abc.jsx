import * as React from 'react';
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Portal from '@mui/material/Portal';
import { Box, Button } from '@mui/material';
import { green } from '@mui/material/colors';

// function CenteredButton() {
//   return (
//     <Box textAlign="center">
//       <Button variant="contained">Click Me</Button>
//     </Box>
//   );
// }


function App() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: 'fixed',
    width: 200,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    p: 1,
  };



  return (
      <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <Box textAlign="center">
          <Button variant="contained" type="button" onClick={handleClick}>Contained</Button>
        </Box>
        {open ? (
          <Portal>
            <Box sx={styles}>
              Click me, I will stay visible until you click outside.
            </Box>
          </Portal>
        ) : null}
      </div>
    </ClickAwayListener>
    )
}

export default App