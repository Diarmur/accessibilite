import React, { useContext }  from "react";
import { NameContext } from "../App";
import "../assets/css/form.css";
import validImg from "../assets/img/icon-complete.svg";

export const Form = () => {

    const { setCardName } = useContext(NameContext);
    const { setCardNumber } = useContext(NameContext);
    const { setCardMonth } = useContext(NameContext);
    const { setCardYear } = useContext(NameContext);
    const { setCardCVC } = useContext(NameContext);
    
    const handleNameChange = (e) => { 
        const elem = document.querySelectorAll('[id=cardName]');
        if (e.target.value.match(/^[a-zA-Z\s]*$/)) {
            for (var i = 0; i < elem.length; i++) {
                elem[i].classList.remove("active");
            }
            var changeValue = e.target.value;
            if (changeValue.length === 0) {
                changeValue = "xxxx xxxx";
            } else {
                changeValue = changeValue.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                e.target.value = changeValue
            }
            setCardName(changeValue);
        } else {
            for (i = 0; i < elem.length; i++) {
                elem[i].classList.add("active");
            }
        }
    }

    const handleNbChange = (e) => { 
        const elem = document.querySelectorAll('[id=cardNb]');
        if (e.target.value.match(/^[0-9 ]*$/)) {
            for (var i = 0; i < elem.length; i++) {
                elem[i].classList.remove("active");
            }
            var changeValue = e.target.value;
            if (changeValue.length > 0) {    
                changeValue = changeValue.replace(/\s/g, "");
                changeValue = changeValue.match(/.{1,4}/g).join(" ").trim();
                e.target.value = changeValue
            }else{
                changeValue = "XXXX XXXX XXXX XXXX"
            }
            setCardNumber(changeValue)
        }else{
            for (i = 0; i < elem.length; i++) {
                elem[i].classList.add("active");
            }
        }
    }

    const handleMonthChange = (e) => { 
        const elem = document.querySelectorAll('[id=cardDate]');
        if (e.target.value.match(/^[0-9]*$/)) {
            for (var i = 0; i < elem.length; i++) {
                elem[i].classList.remove("active");
            }
            var changeValue = e.target.value;
            if (changeValue.length === 2) {
                if (parseInt(changeValue) > 12) {
                    changeValue = "12";
                }
            }
            setCardMonth(changeValue)
        }else{
            e.target.value = e.target.value.replace(/\D/g, "");
            changeValue = e.target.value;
        }
        if (changeValue.length === 0) {
            for (i = 0; i < elem.length; i++) {
                elem[i].classList.add("active");
            }
            changeValue = "MM";
        }

        setCardMonth(changeValue)
    }

    const handleYearChange = (e) => {
        const elem = document.querySelectorAll('[id=cardDate]');
        if (e.target.value.match(/^[0-9]*$/)) {
            for (var i = 0; i < elem.length; i++) {
                elem[i].classList.remove("active");
            }
            var changeValue = e.target.value;
            if (changeValue.length === 2) {
                if (parseInt(changeValue) < 24) {
                    changeValue = "24";
                    e.target.value = changeValue;
                }
            }
        }else{
            e.target.value = e.target.value.replace(/\D/g, "");
            changeValue = e.target.value;
        }
        if (changeValue.length === 0) {
            for (i = 0; i < elem.length; i++) {
                elem[i].classList.add("active");
            }
            changeValue = "YY";
        }
        setCardYear(changeValue)
    }

    const handleCVCChange = (e) => {
        const elem = document.querySelectorAll('[id=cardCVC]');
        
        if (e.target.value.length === 0) {
            for (var i = 0; i < elem.length; i++) {
                elem[i].classList.add("active");
            }
        }else if (e.target.value.match(/^[0-9]*$/)) {
            for (i = 0; i < elem.length; i++) {
                elem[i].classList.remove("active");
            }
            var changeValue = e.target.value;
        }else{
            e.target.value = e.target.value.replace(/\D/g, "");
            changeValue = e.target.value;
        }
        setCardCVC(changeValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fields = ['cardName', 'cardNb', 'cardDate', 'cardCVC'];

        for (let i = 0; i < fields.length; i++) {
            const elem = document.querySelectorAll('[id=' + fields[i] + ']');
            if (elem[0].classList.contains("active") || elem[1].classList.contains("active") || elem[0].value.length === 0) {
                elem[0].focus();
                break;
            } else if (i === fields.length - 1) {
                const form = document.getElementById('form');
                const validation = document.getElementById('validation');
                form.style.display = "none";
                validation.style.display = "flex";
            }
        }
    }

    
    return (
        <div className="Container">
            
            <div className="Form" id="form">
                <form>
                    <label>
                        CARDHOLDER NAME:
                        <input onChange={handleNameChange} type="text" name="name" placeholder="e.g. Jane Appleseed" maxLength={40} className="Large-field" id="cardName"/>
                        <p aria-hidden="true" className="Error-feedback" id="cardName">Wrong format, letter only</p>
                    </label>
                    <label>
                        CARD NUMBER:
                        <input onChange={handleNbChange} type="text" name="card-number" placeholder="e.g. 1234 5678 1234 5678" maxLength={19} className="Large-field" id="cardNb"/>
                        <p aria-hidden="true" className="Error-feedback" id="cardNb">Wrong format, number only</p>
                    </label>
                    <div className="Date-CVC">
                        <label className="Date">
                            Exp. Date(MM/YY)
                            <div>
                                <input onChange={handleMonthChange} type="text" name="month" placeholder="MM" maxLength={2} className="Small-field" id="cardDate"/>
                                <input onChange={handleYearChange} type="text" name="year" placeholder="YY" maxLength={2} className="Small-field" id="cardDate"/>
                            </div>
                            <p aria-hidden="true" className="Error-feedback" id="cardDate">Can't be blank</p>
                        </label>
                        <label className="CVC">
                            CVC
                            <input onChange={handleCVCChange} type="text" name="cvc" placeholder="e.g. 123" maxLength={3} className="Middle-field" id="cardCVC"/>
                            <p aria-hidden="true" className="Error-feedback" id="cardCVC">Can't be blank</p>
                        </label>
                    </div>
                    <button onClick={handleSubmit} >Confirm</button>
                </form>
            </div>

            <div className="Validation" id="validation">
                <img src={validImg} alt="validation icon" />
                <div className="Validation-text">
                    <h1>THANK YOU !</h1>
                    <p>We've added your card details</p>
                </div>
                <button>Continue</button>
            </div>
        </div>
    );
}
