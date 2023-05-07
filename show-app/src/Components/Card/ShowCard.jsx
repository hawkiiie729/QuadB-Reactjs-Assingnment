import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowCard = ({ show }) => {
  console.log("show", show.show.image);
  return (
    <>
      <Card className="custom-card">
        <Card.Img
          variant="top"
          className="py-3 card-img"
          src={show.show.image?.medium}
        />
        <Card.Body className="text-center">
          <Card.Title className="fs-6">{show.show.name}</Card.Title>
          <Card.Text className="text-capotalize text-decoratiom-none fs-6">
            {show.show.genres}
          </Card.Text>
          <Card.Text>
            {" "}
            {show.show.rating.average ? (
              show.show.rating.average
            ) : (
              <div>&nbsp;</div>
            )}
          </Card.Text>
          <Link to={`show/${show.show?.id}`}>
            {" "}
            <Button variant="info">Info</Button>{" "}
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default ShowCard;
