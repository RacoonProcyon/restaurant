import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    Col,
    FormGroup,
    Input,
    Row,
    Table,
    Pagination,
    PaginationItem,
    PaginationLink,
    Label,
    Badge,
    Modal,
    ModalBody,
} from 'reactstrap';
import './Deliveries.css';

class Deliveris extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: false,
        };

    }
    toggleInfo() {
        this.setState({
            info: !this.state.info,
        });
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Card>
                    <h4 className="text-muted" style={{ padding: '20px', borderBottom: "inset" }}>DELIVERIES</h4>
                    <CardBody>
                        <FormGroup >
                            <Label className="text-muted">Deliveris People</Label>
                            <Input type="select" name="deliveris" >
                                <option>demo 1</option>
                                <option>demo 2</option>
                                <option>demo 3</option>
                                <option>demo 4</option>
                                <option>demo 5</option>
                                <option>demo 6</option>
                                <option>demo 7</option>
                                <option>demo 8</option>
                                <option>demo 9</option>
                                <option>demo 10</option>
                                <option>demo 11</option>
                            </Input>
                        </FormGroup>
                    </CardBody>
                    <Row style={{ padding: '20px' }}>
                        <Col>
                            <FormGroup>
                                <Label className="text-muted">Start Date</Label>
                                <Input type="date" className="form-contorl" />
                            </FormGroup>
                        </Col>
                        <Col >
                            <FormGroup>
                                <Label className="text-muted">End Date</Label>
                                <Input type="date" className="form-contorl" />
                            </FormGroup>
                            <Button type="button" color="success" style={{ float: 'right' }}>Search</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="5" style={{ textAlign: 'center' }}>
                            <Button className="btn btn-info" disabled>Copy</Button>&nbsp;&nbsp;
                        <Button className="btn btn-info" disabled>Csv</Button>&nbsp;&nbsp;
                        <Button className="btn btn-info" disabled>Excel</Button>&nbsp;&nbsp;
                        <Button className="btn btn-info" disabled>Print</Button>&nbsp;&nbsp;
                        <Button className="btn btn-info" disabled>Pdf</Button>
                        </Col>
                    </Row>

                    <CardBody>
                        <FormGroup row >
                            <Col md="1">
                                <Button className="btn btn-info">Search</Button>
                            </Col>
                            <Col md="4">
                                <Input type="text" id="search-input" name="search-input" placeholder="search.." />
                            </Col>
                        </FormGroup>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>SI.NO</th>
                                    <th>Customer Name</th>
                                    <th>Deliveriy People</th>
                                    <th>Resturant</th>
                                    <th>Address</th>
                                    <th>Cost</th>
                                    <th>Status</th>
                                    <th>Order List</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Demo 1</td>
                                    <td></td>
                                    <td>Kfc</td>
                                    <td>maison</td>
                                    <td>$136</td>
                                    <td><Badge color="success">ORDERED</Badge></td>
                                    <td> <Button color="info" onClick={() => this.toggleInfo()} className="mr-1">Order List</Button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Demo 2</td>
                                    <td></td>
                                    <td>Kfc</td>
                                    <td>maison</td>
                                    <td>$136</td>
                                    <td><Badge color="success">ORDERED</Badge></td>
                                    <td> <Button color="info" onClick={() => this.toggleInfo()} className="mr-1">Order List</Button></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Demo 3</td>
                                    <td></td>
                                    <td>Kfc</td>
                                    <td>maison</td>
                                    <td>$136</td>
                                    <td><Badge color="success">ORDERED</Badge></td>
                                    <td> <Button color="info" onClick={() => this.toggleInfo()} className="mr-1">Order List</Button></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Demo 4</td>
                                    <td></td>
                                    <td>Kfc</td>
                                    <td>maison</td>
                                    <td>$136</td>
                                    <td><Badge color="success">ORDERED</Badge></td>
                                    <td> <Button color="info" onClick={() => this.toggleInfo()} className="mr-1">Order List</Button></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Demo 5</td>
                                    <td></td>
                                    <td>Kfc</td>
                                    <td>maison</td>
                                    <td>$136</td>
                                    <td><Badge color="success">ORDERED</Badge></td>
                                    <td> <Button color="info" onClick={() => this.toggleInfo()} className="mr-1">Order List</Button></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Demo 6</td>
                                    <td></td>
                                    <td>Kfc</td>
                                    <td>maison</td>
                                    <td>$136</td>
                                    <td><Badge color="success">ORDERED</Badge></td>
                                    <td> <Button color="info" onClick={() => this.toggleInfo()} className="mr-1">Order List</Button></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Demo 7</td>
                                    <td></td>
                                    <td>Kfc</td>
                                    <td>maison</td>
                                    <td>$136</td>
                                    <td><Badge color="success">ORDERED</Badge></td>
                                    <td> <Button color="info" onClick={() => this.toggleInfo()} className="mr-1">Order List</Button></td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Demo 7</td>
                                    <td></td>
                                    <td>Kfc</td>
                                    <td>maison</td>
                                    <td>$136</td>
                                    <td><Badge color="success">ORDERED</Badge></td>
                                    <td> <Button color="info" onClick={() => this.toggleInfo()} className="mr-1">Order List</Button></td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Demo 8</td>
                                    <td></td>
                                    <td>Kfc</td>
                                    <td>maison</td>
                                    <td>$136</td>
                                    <td><Badge color="success">ORDERED</Badge></td>
                                    <td> <Button color="info" onClick={() => this.toggleInfo()} className="mr-1">Order List</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                        <p className="text-muted">Showing 1 to 10 of 10 entries</p>
                        <Pagination>
                            <PaginationItem>
                                <PaginationLink previous tag="button"></PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink tag="button">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink tag="button">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink tag="button">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink tag="button">4</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next tag="button"></PaginationLink>
                            </PaginationItem>
                        </Pagination>
                        <br /><br />
                        <h3 className="text-muted">Total Earning:-</h3>
                        <Row>
                            <Col md="4">
                                <p>Total Earning</p>
                                <p>Commision from Food Items</p>
                                <p>Commision from Delivery Charge</p>
                                <p>Total Commision</p>
                            </Col>
                            <Col>
                                <p className="text-muted">: $6475.00</p>
                                <p className="text-muted">: $264.00</p>
                                <p className="text-muted">: $110.00</p>
                                <p className="text-muted">: $374.00</p>
                            </Col>
                        </Row>
                        <Modal isOpen={this.state.info} toggle={() => this.toggleInfo()} style={{ maxWidth: 'fit-content' }}
                            className={'modal-info  ' + this.props.className}>
                            <ModalBody className="modelScroll">
                                <h3 style={{ padding: '10px', borderBottom: 'inset' }} className="text-muted">Order List</h3>
                                <Row className="modelTable">
                                    <Col md="3">
                                        <p>Order ID</p>
                                        <p>Restaurant Name</p>
                                        <p>Customer Name</p>
                                        <p>Address</p>
                                        <p>Phone Number</p>
                                        <p>Delivery Date</p>
                                        <p>Note</p>
                                        <p>Total Amount</p><br />
                                        <p>Status</p>
                                        <p className="text-muted">ORDERED</p>
                                    </Col>
                                    <Col md="6">
                                        <p className="text-muted">: 60</p>
                                        <p className="text-muted">: Kfc</p>
                                        <p className="text-muted">: Yves</p>
                                        <p className="text-muted">: 21 Rue du Dr Bourrier, 91600 Savigny-sur-Orge, France</p>
                                        <p className="text-muted">: +33xxxxxxxxx</p>
                                        <p className="text-muted">: 2020-03-16 21:49:00</p>
                                        <p className="text-muted">: --</p>
                                        <p className="text-muted">: $136</p><br />
                                        <p >Time</p>
                                        <p className="text-muted">2020-03-16 21:49:49</p>
                                    </Col>
                                </Row><br />
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Product Image</th>
                                            <th>Product Name</th>
                                            <th>Note</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" style={{ maxWidth: '100px' }} alt="" /></td>
                                            <td>chicken noodles</td>
                                            <td>null</td>
                                            <td>$50.00</td>
                                            <td>1</td>
                                            <td>$50.00</td>
                                        </tr>
                                        <tr>
                                            <td><img src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" style={{ maxWidth: '100px' }} alt="" /></td>
                                            <td>chicken noodles</td>
                                            <td>null</td>
                                            <td>$50.00</td>
                                            <td>1</td>
                                            <td>$50.00</td>
                                        </tr>
                                        <br />
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>Discount</td>
                                            <td>Delivery Charge</td>
                                            <td>Tax</td>
                                            <td>Total</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>$45</td>
                                            <td>$20</td>
                                            <td>$10.5</td>
                                            <td>$136</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Button size="lg" color="secondary" style={{ float: 'right' }} onClick={() => this.toggleInfo()}>Close</Button>
                            </ModalBody>
                        </Modal>

                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Deliveris;
