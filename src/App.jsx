import React, { useState } from "react";
export default function App(){
  const [count,setCount]=useState(0);
  return (
    <div style={{fontFamily:"system-ui",padding:"2rem"}}>
      <h1>React + Vite Starter</h1>
      <p>Prosty template uruchomiony z konsoli.</p>
      <button onClick={()=>setCount(c=>c+1)}>Kliknięcia: {count}</button>
    </div>
  );
}
