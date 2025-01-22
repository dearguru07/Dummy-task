import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Data = () => {
  const [a, seta] = useState([]);

  useEffect(() => {
    async function swiggy() {
      const info = await fetch("https://dummyjson.com/products");
      const OriginalData = await info.json();
      console.log(OriginalData);
      seta(OriginalData.products[0].title)
    }
    swiggy();
  }, []);
  return (
    <div>
      <h4>Hello wotrld.......</h4>
    </div>
  );
};
export default Data;
