import React, { Component } from 'react';
import {
    Card,
    CardBody,
    Col,
    FormGroup,
    Input,
    Row,
    Label,
    CardFooter,
    Button
} from 'reactstrap';
import FileBase64 from 'react-file-base64';


class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            files: [],
            featuredFiles: []
        }
    }
    getFiles = (files) => {
        this.setState({ files: files })
    }
    getFilesFeatured = (files) => {
        this.setState({ featuredFiles: files })
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Card>
                    <CardBody>
                        <h4 className="text-muted" style={{ padding: '10px', borderBottom: "inset" }}>CREATE PRODUCT</h4>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label className="text-muted">Name</Label>
                                    <Input type="text" className="form-control" placeholder="Name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="text-muted">Descriptsion</Label>
                                    <Input type="textarea" className="form-control" placeholder="Descriptsion" />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="text-muted">Category</Label>
                                    <Input type="select" name="Category" id="Category">
                                        <option>Rice bowls</option>
                                        <option>Burger</option>
                                        <option>Reice meals</option>
                                    </Input>
                                </FormGroup>
                                <Label className="text-muted">Pure Veg </Label>
                                <FormGroup check>
                                    <Label className="text-muted" check><Input type="radio" name="radio1" />yes</Label>	&nbsp;	&nbsp;	&nbsp;
                                    <Label className="text-muted" check><Input type="radio" name="radio1" />No</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="text-muted">status</Label>
                                    <Input type="select" name="status" id="status">
                                        <option>Enabled</option>
                                        <option>Disabled</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="text-muted">Product Order</Label>
                                    <Input className="form-control" type="text" placeholder="Product Order" />
                                </FormGroup>
                                <Label className="text-muted">Image</Label>
                                <img src={this.state.files && this.state.files[0] && this.state.files[0].base64} alt="" style={{ width: '100%', maxHeight: '250px' }} >
                                </img>
                                <FileBase64
                                    multiple={true}
                                    onDone={(file) => this.getFiles(file)} />
                                <br /><br />
                                <FormGroup check>
                                    <Label check className="text-muted"><Input type="checkbox" />Is Featured Product</Label><br /><br />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="text-muted">Featured Position</Label>
                                    <Input className="form-control" type="number" placeholder="Featured Position" />
                                </FormGroup>
                                <span className="text-muted">Featured Image</span><br />
                                <span className="text-muted">Note:- Please upload Image size 252x152 for featured Product</span>
                                <img src={this.state.featuredFiles && this.state.featuredFiles[0] && this.state.featuredFiles[0].base64} alt="" style={{ width: '100%', maxHeight: '250px' }} >
                                </img>
                                <FileBase64
                                    multiple={true}
                                    onDone={(file) => this.getFilesFeatured(file)} />
                                <br /><br />
                            </Col>
                            <Col>
                                <h4 className="text-muted" style={{ padding: '10px', borderBottom: "inset" }}>Pricing</h4>
                                <FormGroup>
                                    <Label className='text-muted'>Price</Label>
                                    <Input type="number" className="form-contorl" placeholder="price"></Input>
                                </FormGroup>
                                <Label className="text-muted">Addons List</Label>
                                <FormGroup check>
                                    <Label check className="text-muted"><Input type="checkbox" /> Cheese</Label><br /><br />
                                </FormGroup>
                                <FormGroup>
                                    <Label className='text-muted'>Price</Label>
                                    <Input type="number" className="form-contorl" placeholder="price"></Input>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check className="text-muted"><Input type="checkbox" /> Pepper</Label><br /><br />
                                </FormGroup>
                                <FormGroup>
                                    <Label className='text-muted'>Price</Label>
                                    <Input type="number" className="form-contorl" placeholder="price"></Input>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check className="text-muted"><Input type="checkbox" /> Sauce</Label><br /><br />
                                </FormGroup>
                                <FormGroup>
                                    <Label className='text-muted'>Price</Label>
                                    <Input type="number" className="form-contorl" placeholder="price"></Input>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check className="text-muted"><Input type="checkbox" /> Red chilli</Label><br /><br />
                                </FormGroup>
                                <FormGroup>
                                    <Label className='text-muted'>Price</Label>
                                    <Input type="number" className="form-contorl" placeholder="price"></Input>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check className="text-muted"><Input type="checkbox" /> Onions</Label><br /><br />
                                </FormGroup>
                                <FormGroup>
                                    <Label className='text-muted'>Price</Label>
                                    <Input type="number" className="form-contorl" placeholder="price"></Input>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check className="text-muted"><Input type="checkbox" /> Capsicum</Label><br /><br />
                                </FormGroup>
                                <FormGroup>
                                    <Label className='text-muted'>Price</Label>
                                    <Input type="number" className="form-contorl" placeholder="price"></Input>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check className="text-muted"><Input type="checkbox" /> mayonnaise</Label><br /><br />
                                </FormGroup>
                                <FormGroup>
                                    <Label className='text-muted'>Price</Label>
                                    <Input type="number" className="form-contorl" placeholder="price"></Input>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check className="text-muted"><Input type="checkbox" /> Tomato</Label><br /><br />
                                </FormGroup>
                                <FormGroup>
                                    <Label className='text-muted'>Price</Label>
                                    <Input type="number" className="form-contorl" placeholder="price"></Input>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check className="text-muted"><Input type="checkbox" /> Barbeque sauce</Label><br /><br />
                                </FormGroup>
                                <FormGroup>
                                    <Label className='text-muted'>Price</Label>
                                    <Input type="number" className="form-contorl" placeholder="price"></Input>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check className="text-muted"><Input type="checkbox" /> Ketchup</Label><br /><br />
                                </FormGroup>
                                <FormGroup>
                                    <Label className='text-muted'>Price</Label>
                                    <Input type="number" className="form-contorl" placeholder="price"></Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter>
                        <Button type="submit" size="md" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                        <Button type="reset" size="md" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default AddProduct;
