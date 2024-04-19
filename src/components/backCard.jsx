import React, { useContext } from "react";
import { NameContext } from "../App";
import "../assets/css/sidebar.css";
import backCard from "../assets/img/bg-card-back.png";


export const BackCard = () => {
    const { CardCVC } = useContext(NameContext);
  return(
    <div className="Back-card" style={{ backgroundImage:`url(${backCard})`}}>
        <p className="Card-cvc">
                {CardCVC}
            </p>
    </div>
  );
}

