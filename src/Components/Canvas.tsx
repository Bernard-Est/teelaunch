/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { useRef } from 'react';
import './../App.css';


const Canvas = () =>{
  const canvas = useRef(null);


  return (
    <div>
        <canvas ref={canvas} width={400} height={400} />
    </div>
  );
}

export default Canvas;