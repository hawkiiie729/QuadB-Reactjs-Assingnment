import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopNavbar from "../../Components/TopNavbar";
import Footer from "../../Components/Footer";
import { Button, Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import "./SingleShowDetails.css";

const SingleShowDetail = () => {
  let { showId } = useParams();
  //console.log(showId);
  let [shows, setShows] = useState([]);
  let [show, setShow] = useState(null);
  const [showw, setShoww] = useState(false);

  const handleClose = () => setShoww(false);
  const handleShow = () => setShoww(true);
  
  //allShows
  useEffect(() => {
    showStore();
  }, []);

  const showStore = async () => {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
    //console.log("res->", res);
    const jsonData = await res.json();
    //console.log("jsonData", jsonData);
    setShows(jsonData);
  };
  useEffect(() => {
    let result = shows.find((s) => s.show.id === parseInt(showId));
    setShow(result);
  }, [showId, shows]);

  console.log("show->",show);

  return <>
<TopNavbar/>
<Container>
    {show && (
        <Row className="my-5">
            <Col md={6} sm={12}>
            <div className="img-container p-3">
            <Image className="single-img" src={show.show.image?.medium} />
            </div>
            </Col>
            <Col md={6} sm={12}>
            <div className="px-4">
            <h2>{show.show.name}</h2>
            <h5>Show Summary</h5>
            <p>{show.show.summary}</p>
            <h6>{show.show.type}</h6>
            <div className="my-3">
              <Button variant="dark" onClick={handleShow}>Book Ticket</Button>
            </div>
            <div className="">
            <Modal show={showw} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{show.show.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Your Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Your phone no." rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput3"
            >
              <Form.Label>Number of Persons</Form.Label>
              <Form.Control type="number" placeholder="no of persons" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={handleClose}>
            Book Tickets
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
            
            </div>
            </Col>
        </Row>
    )}
</Container>
<Footer/>
  </>;
};

export default SingleShowDetail;
