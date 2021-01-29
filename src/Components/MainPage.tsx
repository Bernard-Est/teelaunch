/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component, useRef } from 'react';
import { Button, Container } from 'react-bootstrap';
import './../App.css';
import Canvas from './Canvas';

class Mainpage extends Component{

state : any = {}
constructor(props : any) {
        super(props);
        this.state = {
            selectedFile: null,
            file: null
          };
}

onChangeFile = (event:any) => {
    this.setState({
        file: URL.createObjectURL(event.target.files[0])
    })
};

upload = () =>{
      let c = document.getElementById("myCanvas") as HTMLCanvasElement;
      let ctx = c.getContext("2d");
      var img = document.getElementById('test') as HTMLImageElement;
      ctx?.drawImage(img,0,0,100,100);
    console.log(this.state.file);
}

download_img = (el: any) => {
   let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  // var image = canvas.toDataURL('image/png');
  // el.href = image;
  // console.log(image);
  // const download = () => {
    let image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    window.location.href = image;
  };



render(){

  return (
    
    <div>
      <Container>
        <div style={{ marginBottom: 10 }}>
            <img 
            id="test" 
            src={this.state.file} 
            width="100px" 
            height="100px"
            ></img>

            <input type="file" onChange={this.onChangeFile} />
            
            <Button variant="outline-primary" onClick={this.upload}>
              Upload
            </Button>
             <canvas id="myCanvas" width="100%" height="100%" >Hello</canvas>

             <a 
             id="download" 
             download="myImage.jpg" 
             href="" 
             onChange ={() => this.download_img(this)} 
             >
               Download to myImage
             </a>

        </div>   
        </Container>    
    </div> 
  );
}
}

export default Mainpage;