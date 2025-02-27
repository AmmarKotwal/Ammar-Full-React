import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Islamabad() {
    let useloc = useLocation();
    let a = useloc.state?.msg;
  return (
    <div>
         <br />
        <h1>{a}</h1>
    </div>
  )
}
