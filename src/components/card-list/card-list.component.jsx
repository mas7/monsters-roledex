import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
  //   console.log(props);
  return (
    <div className="card-list ">
      {/* <div className="col"> */}
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
      {/* </div> */}
    </div>
  );
};

export default CardList;
