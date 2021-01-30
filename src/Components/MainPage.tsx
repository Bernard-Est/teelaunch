/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import "./../App.css";

class Mainpage extends Component {
  state: any = {};
  constructor(props: any) {
    super(props);
    this.state = {
      selectedFile: null,
      file: null,
    };
  }

  onChangeFile = (event: any) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  };

  upload = () => {
    let c = document.getElementById("myCanvas") as HTMLCanvasElement;
    let ctx = c.getContext("2d");
    var img = document.getElementById("test") as HTMLImageElement;
    ctx?.drawImage(img, 0, 0, 450, 400);
    ctx!.font = "15px Arial";
    ctx!.textAlign = "center";
    ctx!.textAlign = "start";
    ctx!.fillText("Welcome To TeeLaunch :)", 30, 30);
    //console.log(this.state.file);
  };

  download_img = () => {
    let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    // var image = canvas.toDataURL('image/png');
    // el.href = image;

    let image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    window.location.href = image;
    console.log(image);
  };

  render() {
    return (
      <div>
        <div>
          <Container>
            <Row>
              <div className="centralize">
                <span>
                  <img
                    id="test"
                    src={this.state.file}
                    width="80px"
                    height="80px"
                    alt=""
                  ></img>
                </span>
                <span>
                  <input type="file" onChange={this.onChangeFile} />
                </span>
                <div className="spaceButton">
                  <Button variant="primary" size="lg" onClick={this.upload}>
                    Upload Your Image
                  </Button>
                </div>
              </div>
              <div>
                <Card className="CardDesign">
                  <Card.Body>
                    <Card.Title>Your Canvas</Card.Title>
                    <div>
                      <canvas id="myCanvas" width="450px" height="400px">
                        My Canvas
                      </canvas>
                    </div>
                    <div>
                      <Button id="download" onClick={this.download_img}>
                        {" "}
                        Download to my PC
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Mainpage;
