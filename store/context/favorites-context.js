import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  favoritesIds: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
  isInFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoritesIds, setFavoritesIds] = useState([]);

  function addFavorite(id) {
    setFavoritesIds((prevState) => [...prevState, id]);
  }

  function removeFavorite(id) {
    setFavoritesIds((prevState) =>
      prevState.filter((favoriteId) => {
        id != favoriteId;
      })
    );
  }

  function isInFavorite(id) {
    return favoritesIds.includes(id);
  }

  const value = {
    favoritesIds,
    addFavorite,
    removeFavorite,
    isInFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoriteContextProvider;
