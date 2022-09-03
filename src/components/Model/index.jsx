import imgModel from "../../../public/images/model.jpg";
import "./style.scss";
import data from "../../assets/data/dataGlasses.json";

const Model = ({ activeItem }) => {
  if (activeItem === undefined) {
    return (
      <div className="wrap-img">
        <img className="wrap-img__model" src={imgModel} alt="" />
      </div>
    );
  }

  const item = data[activeItem];
  return (
    <div className="wrap-img">
      <img className="wrap-img__glass" src={item?.url} alt="" />
      <img className="wrap-img__model" src={imgModel} alt="" />
      <div className="desc">
        <p className="desc__name">{item.name}</p>
        <p className="desc__info">{item.desc}</p>
      </div>
    </div>
  );
};

export default Model;
