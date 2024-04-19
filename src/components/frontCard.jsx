import React, { useContext } from "react";
import { NameContext } from "../App";
import "../assets/css/sidebar.css";
import frontCard from "../assets/img/bg-card-front.png";
import cardLogo from "../assets/img/card-logo.svg";

export const FrontCard = () => {
    const { CardName } = useContext(NameContext);
    const { CardNumber } = useContext(NameContext);
    const { CardMonth } = useContext(NameContext);
    const { CardYear } = useContext(NameContext);
  return(
    <div aria-label="Bank Card Front" className="Front-card" style={{ backgroundImage:`url(${frontCard})`}}>
        <img src={cardLogo} alt="card logo"/>
        <div className="Card-info">
            <p className="Card-Number">
                {CardNumber}
            </p>
            <div className="Card-Holder-Exp">
                <p className="Name">{CardName}</p>
                <p className="Expiration">{CardMonth}/{CardYear}</p>
            </div>
        </div>
    </div>
  );
}