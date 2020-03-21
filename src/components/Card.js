import React, { Component } from "react";
import "./Card.css";
import { Button, Modal } from "react-bootstrap";

const Card = ({ name, email, id }) => {
  return (
    <div
      className="tc bg-dark-blue dib br3 pa3 ma2 grow bw2 shadow-5"
      id="robotDiv"
    >
      <img alt="photo" src={`https://robohash.org/${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
