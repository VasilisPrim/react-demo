import { Link } from "react-router-dom";
import { useContext } from "react";


import classes from './Mainnavigation.module.css';
import FavoritesContext from "../../store/favorites-context";

function NavBar() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React meet ups</div>
      <nav>
        <ul>

        <li>
          <Link to="/">All meet ups</Link>
        </li>
        <li>
          <Link to="/new-meetup">New meet up</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites<span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
        </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
