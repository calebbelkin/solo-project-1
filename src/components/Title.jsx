import React, { useEffect, useState } from "react";
import "./Title.css";

const Title = () => {
  return (
    <div className="Title">
      <h1 id="groceryTitle">Grocery List</h1>
      <h2 id="listDescription">Type in items to add to your list</h2>
    </div>
  );
};

export default Title;
