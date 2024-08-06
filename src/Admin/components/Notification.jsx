import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
function Notification(prop) {
  return (
    <>
    <div className="flex justify-center w-full z-10 fixed top-5 left-0"> 
      <div className="prodAddedToCart  w-[30%]">
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity={prop.type}>{prop.message}</Alert>
      </Stack>
    
      </div>
      </div>
    </>
  )
}

export default Notification
