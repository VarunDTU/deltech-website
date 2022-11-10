import { useState, useEffect } from "react";

export const userposition=()=>{
    const[scrollPosition,setScrollPosition]=useState(0);

    useEffect(()=>{
        const updatePosition=()=>{

            setScrollPosition(window.pageYOffset);
        };
        window.addEventListener('scroll',updatePosition);
        updatePosition();
        return ()=>window.removeEventListener('scroll',updatePosition);

    },[]
    );
    return scrollPosition;
   

    

};    
