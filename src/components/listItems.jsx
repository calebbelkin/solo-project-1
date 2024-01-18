import React from "react";
import "./listItem.css";

const CurrListItem = ({ item }) => {
  return (
    <div className="FoodItem">
      <ul>
        <li>{item}</li>
      </ul>
    </div>
  );
};

export default CurrListItem;
