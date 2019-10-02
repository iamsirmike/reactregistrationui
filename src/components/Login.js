import React, {Component} from 'react'
import '../index.css'
import { Modal, ModalBody, Button, Container, Col, Row, Form, FormGroup, Input } from 'reactstrap'

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
      login = (e) =>{
        e.preventDefault();
      }
    render(){
      //styling
      const input ={
        width: "100%",
        padding: "12px 20px",
        margin: "2px 0",
        border: "1px solid ##a6a6a6",
        borderTopColor: "#949494",
        borderRadius: "5px",
        display: "inline-block"
        
    };
    const form2 ={
      padding: "20px",
      // borderRadius: "400px !mportant"
  };
  const button={
      backgroundColor: "blueviolet",
      width: "100%"
  };
  const seeU={
    color: "blueviolet"
  }

    //end styling
        return(
            <div>
            <center style={{color: "blueviolet"}}> <p onClick={this.toggle} id="btn">Already have an account? LOGIN</p></center>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalBody>
                    <Container>
                        <Row>
                         <Col>
                          <div className="form2" style={form2}>
                            <center><h3>Login</h3></center>
                            <Form onSubmit={this.login}>
                              <FormGroup>
                                <Input type="email" id="email" className="email" placeholder="Email" style={input}/> 
                              </FormGroup>
                              <FormGroup>
                                <Input type="password" id="password" className="password" placeholder="Password" style={input}/> 
                              </FormGroup>
                              <FormGroup>
                                    <Button style={button} id="button">Login</Button>
                              </FormGroup>
                              <center style={{color: "#000000"}}>If you don't have an account click outside this box to close it and register.<br /> <br /></center><hr />
                              <center style={seeU}>COME BACK SOON</center>
                          </Form>
                          </div>
                         </Col>
                       </Row>
                    </Container>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Login;