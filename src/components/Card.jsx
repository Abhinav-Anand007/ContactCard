import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <h1 className="name">{props.name}</h1>
      <Avatar url={props.url} />
      <div className="bottom">
        <Details info={props.id} />
        <Details info={props.contact} />
        <Details info={props.email} />
      </div>
    </div>
  );
}

export default Card;
