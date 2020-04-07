import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Input,
    CardFooter,
    Label
} from 'reactstrap';
import FileBase64 from 'react-file-base64';

class AddCategoryForm extends Component {
    constructor() {
        super()
        this.state = {
            files: []
        }
    }
    getFilesShop = (files) => {
        this.setState({ files: files })
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Card>
                    <CardBody>
                        <h4 className="text-muted">CREATE CATEGORY</h4>
                        <FormGroup>
                            <Label className="text-muted">Name</Label>
                            <Input type="text" className="form-control" placeholder="Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="text-muted">Description</Label>
                            <Input type="textarea" className="form-control" placeholder="Discription" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="text-muted">Shop Name : Kfc</Label>
                        </FormGroup>
                        <FormGroup>
                            <Label className="text-muted">Select</Label>
                            <Input type="select" name="status" id="status">
                                <option>Eneble</option>
                                <option>Disabled</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label className="text-muted">Category order</Label>
                            <Input type="number" className="form-control" placeholder="Category order" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="text-muted">Image</Label><br />
                            <img src={this.state.files && this.state.files[0] && this.state.files[0].base64} alt="" style={{ maxWidth: '100%', maxHeight: '250px' }} >
                            </img>
                            <br />
                            <FileBase64
                                multiple={true}
                                onDone={(file) => this.getFilesShop(file)} />                        </FormGroup>
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

export default AddCategoryForm;
