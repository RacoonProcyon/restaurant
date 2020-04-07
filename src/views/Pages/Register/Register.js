import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

const backImg = "https://www.wallpaperup.com/uploads/wallpapers/2017/05/06/1089084/bcdc749650b552868396f382b878be65-700.jpg"
class Register extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center" style={{ backgroundImage: `url(${backImg})` }}>
        <Container >
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6" >
              <Card className="mx-4"  >
                <CardBody className="p-4">
                  <Form>
                    <h1>Register <strong className="text-muted">Shop</strong></h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-2">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="drftgf" autoComplete="drftgf" />
                    </InputGroup>
                    <InputGroup className="mb-2">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" placeholder="Email" autoComplete="email" />
                    </InputGroup>
                    <InputGroup className="mb-2">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>+91</InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" placeholder="Phone" autoComplete="number" />
                    </InputGroup>
                    <InputGroup className="mb-2">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" />
                    </InputGroup>
                    <InputGroup className="mb-2">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="repeat-password" />
                    </InputGroup>
                    <Row>
                      <Col>
                        <Label className="text-muted">Opne shop</Label>
                        <InputGroup className="mb-2">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i class="icon-speedometer "></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="time" autoComplete="time" />
                        </InputGroup>
                      </Col>
                      <Col>
                        <Label className="text-muted">close shop</Label>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i class="icon-speedometer "></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="time" autoComplete="time" />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Link to="/location"><Button color="success" block>Next</Button></Link>
                  </Form>
                </CardBody>
                <CardFooter className="p-4" >
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
