import React from "react";
import { useState, useRef } from "react";
import CurrListItem from "./listItems.jsx";
import "./Grocery_form.css";

const Grocery_Form = () => {
  const [listItem, updateListeItem] = useState("");
  const [isClicked, updateIsClicked] = useState(true);
  const [itemsArray, setItemsArray] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setItemsArray((prevItems) => [...prevItems, listItem]);

    updateListeItem("");
    fetch("/added", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ listItem }),
    }).then(() => {
      console.log("Item sent!");
    });
  };

  const newitems = itemsArray.map((item) => (
    <CurrListItem key={item} item={item} />
  ));

  return (
    <div className="intake_form">
      <form onSubmit={handleClick}>
        <label>
          <input
            type="text"
            name="listItem"
            value={listItem}
            placeholder=""
            onChange={(e) => updateListeItem(e.target.value)}
          />
        </label>
        <input
          type="submit"
          value="Add Item"
          onClick={() => updateIsClicked(isClicked)}
        />
      </form>
      {isClicked && newitems}
    </div>
  );
};

export default Grocery_Form;
