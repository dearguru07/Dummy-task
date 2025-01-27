import React from "react";
import { useState } from "react";
// import { useEffect } from "react";

const Images=["https://images.pexels.com/photos/30254740/pexels-photo-30254740/free-photo-of-golden-waffles-with-syrup-drizzle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/30319081/pexels-photo-30319081/free-photo-of-urban-garage-entrance-with-shadowy-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/10803797/pexels-photo-10803797.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/20367778/pexels-photo-20367778/free-photo-of-brunette-in-coat-and-hat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/25810976/pexels-photo-25810976/free-photo-of-healthy-breakfast-with-beverages.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/30104926/pexels-photo-30104926/free-photo-of-scenic-view-of-lighthouse-by-the-rocky-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"]

const Data = (props) => {
  const [a, seta] = useState(0);
  function HandlePrev(){
    if(a===0)seta(Images.length-1)
      else seta(a-1)
  }
  const [b,setb]=useState([])
  async function fun(){
    const info=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0445612&lng=77.57268839999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const OrignalData=await info.json()
    console.log(OrignalData)
  }
  
  return (
    <div>
      <div className="flex">
      <button onClick={HandlePrev}>Prev</button>
      <img src={Images[a]} alt=""></img>
      <button onClick={HandlePrev}>Next</button>
      <button onClick={fun}>Hello</button>
    </div>
    <div>
      <img src=""></img>
    </div>
    </div>
  );
};
export default Data;
