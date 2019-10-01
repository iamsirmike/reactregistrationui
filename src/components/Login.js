import React, {Component} from 'react'
import '../index.css'
import { Modal, ModalHeader, ModalBody, Button, Container, Col, Row, Form, FormGroup, Input } from 'reactstrap'

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
    render(){
        return(
            <div>
            <center style={{color: "blueviolet"}}> <p onClick={this.toggle} id="btn">Already have an account? LOGIN</p></center>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}></ModalHeader>
                <ModalBody>
                    //insert all codes here
                </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Login;