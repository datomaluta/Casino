import dropdown from "../../../assets/dropdown.svg";
import classes from "./Category.module.css";

import searchpng from "../../../assets/searchpng.png";

const Category = (props) => {
  const inputHandler = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <div className={classes.categoryWrapper}>
      <p className={classes.allGames}>
        All Games <span>({props.gamesCount})</span>
      </p>
      <div className={classes.allProviders}>
        <p>All Providers</p>
        <img src={dropdown} alt="dropwdwn" />
      </div>
      <div className={classes.inputDiv}>
        <input onChange={inputHandler} placeholder="Search Games..." />
        <img src={searchpng} alt="searchicon" />
      </div>
    </div>
  );
};

export default Category;
