import { createContext,useState } from "react";

const FavoritesContext = createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite :(favoriteMeetUp)=>{},
    removeFavorite:(meetupId)=>{},
    itemIsFavorite:(meetupId)=>{}

});

export function FavoritesContextProvider(props){

    const [userFavorites,setUserFavorites] = useState([]);


    function addFavoriteHandler(favoriteMeetUp){
        setUserFavorites((previousFav)=>{
            return previousFav.concat(favoriteMeetUp);
        })
    }


    function removeFavoriteHandler(meetupId){
        setUserFavorites((prevfav)=>{
            return prevfav.filter((meetup)=>meetupId!==meetup.id)
        })
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup=>meetupId===meetup.id)
    }

    const context = {
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemIsFavorite:itemIsFavoriteHandler
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}


export default FavoritesContext;