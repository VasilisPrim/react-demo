import { useContext } from 'react';

import Card from '../ui/Card'
import classes from './MeetUpItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function MeetUpItem(props){
  const favoritesCtx = useContext(FavoritesContext);
  const isFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavorites(){
    if(isFavorite){
      favoritesCtx.removeFavorite(props.id)
    }else{
      favoritesCtx.addFavorite({
        id:props.id,
        title:props.title,
        description:props.description,
        image:props.image,
        address:props.address
      });
    }
  }
    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={toggleFavorites}>{isFavorite ? 'Remove from Favorites':'Add to Favorites'}</button>
          </div>
        </Card>
      </li>
    );
}


export default MeetUpItem;