import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function usePreviousPath() {

    const [prevPath , setPrevPath] = useState()
    let navigate = useNavigate();


    const navigateToNewRoute = (path) => {
        // Store the current route as previousPath before navigating
        setPrevPath(window.location.pathname); // Or use useLocation().pathname if available
    
        // Navigate to the new route
        navigate(path);
      };


      return { prevPath, navigateToNewRoute };


}
