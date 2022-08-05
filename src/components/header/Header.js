import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/sports">
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/inplay">
              In-Play
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/casino">
              Casino
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/livecasino">
              Live Casino
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/virtualsports">
              Virtual Sports
            </NavLink>
          </li>
        </ul>
        <div className={classes.actions}>
          <button className={classes.join}>Join</button>
          <button className={classes.login}>Log In</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
