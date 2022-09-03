import list from "../../assets/data/dataGlasses.json";
import "./style.scss";

const ListGlasses = ({ activeItem, changeItem }) => {
  const listGlassHTMl = list.map((item, index) => (
    <li key={item.id} className={index === activeItem ? "active" : ""} onClick={() => {changeItem(index)}}>
      <div className="wrap-item" >
        <img src={`${item.url}`} alt="" />
      </div>
    </li>
  ));
  return (
    <div className="wrap-glasses" >
      <ul className="wrap-glasses__list">{listGlassHTMl}</ul>
    </div>
  );
};

export default ListGlasses;
