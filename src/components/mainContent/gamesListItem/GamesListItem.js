import classes from "./GamesListItem.module.css";
import { Link } from "react-router-dom";

const GamesListItem = (props) => {
  //   console.log(props);
  return (
    <div>
      <Link to={`/inplay/${props.name}`} className={classes.itemWrapper}>
        <img
          src={`https://static.inpcdn.com/${props.imgSrc}`}
          alt={`${props.name}`}
        />
        {props.name}
      </Link>
    </div>
  );
};

export default GamesListItem;
