import React,{createContext,useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import "./assets/css/global/base.css";
import "./assets/font/SpaceGrotesk-VariableFont_wght.ttf";


export const NameContext = createContext(); // Add this line to import the NameContext

const NameContextProvider = ({ children }) => {
  const [CardName, setCardName] = useState("John Doe");
  const [CardNumber, setCardNumber] = useState("1234 5678 1234 5678");
  const [CardMonth, setCardMonth] = useState("MM");
  const [CardYear, setCardYear] = useState("YY");
  const [CardCVC, setCardCVC] = useState("000");

  return (
      <NameContext.Provider value={{ CardName, setCardName, CardNumber, setCardNumber, CardMonth, setCardMonth, CardYear, setCardYear, CardCVC, setCardCVC }}>
          {children}
      </NameContext.Provider>
  );
};
export const App = () => {
  return (
    <NameContextProvider>
      <BrowserRouter>
        <Routes>
            <Route index={true} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </NameContextProvider>
  );
}

export default App