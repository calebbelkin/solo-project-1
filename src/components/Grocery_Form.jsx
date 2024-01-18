import React from "react";
import { useState, useRef } from "react";
import CurrListItem from "./listItems.jsx";

const Grocery_Form = () => {
  const [listItem, updateListeItem] = useState("");
  const [isClicked, updateIsClicked] = useState(true);
  const [itemsArray, setItemsArray] = useState([]);
  // const itemReset = useRef("");

  const handleClick = (e) => {
    e.preventDefault();

    const currItem = { listItem };
    // if (listItem == "") console.log("Your list is empty!");
    console.log(currItem);
    setItemsArray((prevItems) => [...prevItems, listItem]);

    updateListeItem("");
    // fetch("http://localhost:3000/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ listItem }),
    // });
  };

  const newitems = itemsArray.map((item) => (
    <CurrListItem key={item} item={item} />
  ));

  return (
    <div className="intake form">
      <form onSubmit={handleClick}>
        <label>
          <input
            type="text"
            // ref={itemReset}
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
