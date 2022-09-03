import { useState } from "react";
import Model from "../Model/index";
import ListGlasses from "../ListGlasses/index";
import "./style.scss";

const Glasses = () => {
  const [activeItem, setActiveItem] = useState(0)
  return (
    <div className="wrap-app">
      <div className="wrap-model">
        <Model activeItem={activeItem}/>
        <Model />
      </div>
      <ListGlasses activeItem={activeItem} changeItem={setActiveItem}/>
    </div>
  );
};

export default Glasses;
