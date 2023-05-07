import React, { useEffect, useState } from "react";
import ShowCard from "./Card/ShowCard";
import { Container, Row, Col } from "react-bootstrap";

const AllShows = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    showStore();
  }, []);

  const showStore = async () => {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
    //console.log("res->", res);
    const jsonData = await res.json();
    //console.log("jsonData", jsonData);
    setData(jsonData);
  };
  return (
    <>
      <Container>
        <h4 className="mb-4">All Shows</h4>
        <Row>
          {data.map((p) => {
            return p.show.image ? (
              <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={p.id}>
                <ShowCard show={p} />
              </Col>
            ) : null;
          })}
        </Row>
      </Container>
    </>
  );
};

export default AllShows;
