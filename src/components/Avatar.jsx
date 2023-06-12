import React from "react";

function Avatar(props) {
  return <img className="image" src={props.url} alt={props.name} />;
}

export default Avatar;
