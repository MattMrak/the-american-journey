import React from 'react';
import '../App.css';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import Favorite from "@material-ui/icons/Favorite";
// import IconButton from '@material-ui/core/IconButton';

const FavoriteButton = () => {
    const [fav, setFav] = React.useState(false);
    return (
        <div className="favorite-button">
            {fav && 
                <button onClick={() => { setFav(!fav) }}  aria-label="delete" color="primary">Favorite</button>
            }
            {!fav &&
                <button onClick={() => { setFav(!fav) }} aria-label="delete" color="primary">Favorite</button>
            } 
        </div>
    );
}

export default FavoriteButton;