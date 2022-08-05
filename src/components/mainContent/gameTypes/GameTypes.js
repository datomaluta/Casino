import { Link } from "react-router-dom";
import classes from "./GameTypes.module.css";
import videoslot from "../../../assets/gametypesimg/videoslot.png";
import popularslot from "../../../assets/gametypesimg/popular.png";
import fav from "../../../assets/gametypesimg/fav.png";
import newgames from "../../../assets/gametypesimg/newgames.png";
import tablegames from "../../../assets/gametypesimg/tablegames.png";
import jackpot from "../../../assets/gametypesimg/jackpot.png";
import poker from "../../../assets/gametypesimg/videopoker.png";
import more from "../../../assets/gametypesimg/more.png";

const Gametypes = () => {
  return (
    <div className={classes.typesWrapper}>
      <div className={classes.typeWrapper}>
        <Link className={classes.videoSlot} to="/inplay/videoslot">
          <img src={videoslot} alt="videoslot" />
          Video <br /> Slots
        </Link>
      </div>
      <div className={classes.typeWrapper}>
        <Link to="/inplay/popularslot">
          <img src={popularslot} alt="popularslot" />
          Popular <br /> Slots
        </Link>
      </div>
      <div className={classes.typeWrapper}>
        <Link to="/inplay/fav">
          <img src={fav} alt="fav" />
          Fav
        </Link>
      </div>
      <div className={classes.typeWrapper}>
        <Link to="/inplay/newgames">
          <img src={newgames} alt="newgames" /> New <br /> Games
        </Link>
      </div>
      <div className={classes.typeWrapper}>
        <Link to="/inplay/tablegames">
          <img src={tablegames} alt="tablegames" />
          Table <br /> Games
        </Link>
      </div>
      <div className={classes.typeWrapper}>
        <Link to="/inplay/jackpotgames">
          <img src={jackpot} alt="jackpot" /> Jackpot <br /> Games
        </Link>
      </div>
      <div className={classes.typeWrapper}>
        <Link to="/inplay/videopoker">
          <img src={poker} alt="videopoker" /> Video <br /> Poker
        </Link>
      </div>
      <div className={classes.typeWrapper}>
        <Link to="/inplay/more">
          <img src={more} alt="videopoker" /> More
        </Link>
      </div>
    </div>
  );
};

export default Gametypes;
