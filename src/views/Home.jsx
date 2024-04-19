import React from "react";
import { Sidebar } from "../components/sidebar";
import { Form } from "../components/form";
import "../assets/css/global/base.css";




export const Home = () => {
  return (
    <div className="Home">
        <Sidebar />
        <Form />
    </div>
  );
};