import React, {Component} from 'react'
import { Form, FormGroup,Input, Button, Container, Row, Col} from 'reactstrap'
import '../index.css'
//component
import Login from './Login'

class Registration extends Component{
    constructor(props){
        super(props)
        this.state ={
            fullname: "",
            email: "",
            password: ""
        }
    
    }
    render(){
        //styling
        const h3 ={
            color: "#000000",
            padding: "20px"
        };
        const input ={
            width: "100%",
            padding: "12px 20px",
            margin: "2px 0",
            border: "1px solid ##a6a6a6",
            borderTopColor: "#949494",
            borderRadius: "5px",
            display: "inline-block"
        };
        const form1 ={
            padding: "20px",
            borderRadius: "10px"
        };
        const button={
            backgroundColor: "blueviolet",
            width: "100%"
        };
        //end styling
        return(
            <div className="bg">
              <Container className="cont">
                <Row>
                    <Col md="7">
                        <h1 className="h1">Welcome to the <br />developers community...</h1> <br />
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </h6>
                    </Col>
                    <Col md="5">
                        <div className="form1" style={form1}>
                           <center> <h3 style={h3}>Join in Seconds</h3></center>
                            <Form>
                                <FormGroup>
                                    <Input type="text" name="fullname" id="fullname" placeholder="Full name" style={input} onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="email" name="email" id="email" placeholder="Email address" style={input} onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" name="password" id="password" placeholder="Create password" style={input} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Button style={button}>Create your account</Button>
                                </FormGroup>
                                <center style={{color: "#000000"}}>By creating an account you accept our terms and conditions</center><hr />
                                <Login /> 
                            </Form>
                        </div>
                    </Col>
                </Row>
              </Container>
            </div>
        )
    }
}

export default Registration;
