import React from "react";
import { useState, useRef } from "react";

const Grocery_Form = () => {
  const [listItem, updateListeItem] = useState("");
  const itemReset = useRef("");

  const handleClick = (e) => {
    e.preventDefault();

    const currItem = { listItem };
    // if (listItem == "") console.log("Your list is empty!");
    itemReset.current.value = "";
    console.log(currItem);
  };

  return (
    <div className="intake form">
      <form onSubmit={handleClick}>
        <label>
          <input
            type="text"
            ref={itemReset}
            name="listItem"
            value={listItem}
            placeholder=""
            onChange={(e) => updateListeItem(e.target.value)}
          />
        </label>
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default Grocery_Form;
