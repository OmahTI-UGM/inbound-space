import React, { useState, useEffect} from 'react'    

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 , orix: 0, oriy:0});
    var justOnce = 0;
    
    const updateMousePosition = ev => {
      if (justOnce == 0){
        setMousePosition({ x: ev.clientX, y: ev.clientY, orix: 0, oriy: 0 });
        justOnce = 1;
      }else if (justOnce == 1){
        setMousePosition({ x: ev.clientX, y: ev.clientY, orix: 23, oriy: 23 });
        justOnce = 2;
      }else if(justOnce == 2){
        setMousePosition({ x: ev.clientX, y: ev.clientY});
      }
    };
  
    useEffect(() => {
      window.addEventListener("mousemove", updateMousePosition);
  
      return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);
  
    return mousePosition;
};
  
    
export default useMousePosition