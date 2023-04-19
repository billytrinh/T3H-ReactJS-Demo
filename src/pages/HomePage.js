import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }
    handleShow(){
        this.setState({show:true})
    }
    handleClose(){
        this.setState({show:false})
    }
    render(){
        let show = this.state.show;
        return (
        <div>
            <h1>Home page</h1>
            <Button variant="danger">Primary</Button>{' '}
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Button variant="primary" onClick={this.handleShow.bind(this)}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={this.handleClose.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose.bind(this)}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose.bind(this)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>);
    }
}