import React, { Component } from "react";
import Title from "./Title.jsx";
import Grocery_Form from "./Grocery_Form.jsx";
import CurrListItem from "./listItems.jsx";
import "./App.css";

const App = () => {
  return (
    <div id="everything">
      <Title />
      <Grocery_Form> </Grocery_Form>
      <CurrListItem></CurrListItem>
    </div>
  );
};

export default App;
