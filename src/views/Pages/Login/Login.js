import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const backImg = "https://www.wallpaperup.com/uploads/wallpapers/2017/05/06/1089084/bcdc749650b552868396f382b878be65-700.jpg"
class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center" style={{ backgroundImage: `url(${backImg})` }}>
        <Container >
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup >
                <Card className="p-4">
                  <CardBody >
                    <Form >
                      <h1 >Login as <strong className="text-muted">Shop</strong></h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="Email" autoComplete="email" required />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" required />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Link to="/dashboard">
                            <Button color="primary" className="px-4">Login</Button>
                          </Link>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center"  >
                    <div>
                      <h2>Sign up</h2>
                      <p>Search Results
                      Featured snippet from the web
Go Foods are the type of food that provide fuel and help us 'go' and be active. Examples of 'Go' foods include bread, rice, pasta.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
