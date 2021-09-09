import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import UpdateComponent from './components/UpdateComponents';
import { books } from './data';

export const PersonContext = React.createContext();
 
function App() {
  const [favorites, setFavorites] = useState([]);
  const [purchaseList, setpurchaseList] = useState([]);
  const [renderComponent, setrenderComponent] = useState('booklist');

  // set the name of component
  const updateRenderComponent = (component) => {
    setrenderComponent(component);
  };

  // check if the book is in the wish list or not
  const isFavorite = (book) => {
    return favorites.filter((item) => item.id === book.id).length !== 0;
  };

  // add the book to puchased books list
  const buyBook = (book) => {
    setpurchaseList([...purchaseList, book]);
  };

  // add or remove the book from wish list
  const toggleFavorite = (book) => {
    if (!isFavorite(book)) {
      setFavorites((favorites) => [...favorites, book]);
    } else {
      setFavorites((favorites) =>
        favorites.filter((item) => item.id !== book.id)
      );
    }
  };

  return (
    <PersonContext.Provider
      value={{
        buyBook,
        isFavorite,
        toggleFavorite,
        books,
        favorites,
        purchaseList,
      }}
    >
      <Header updateRenderComponent={updateRenderComponent} />
      <UpdateComponent renderComponent={renderComponent} />
    </PersonContext.Provider>
  );
}

export default App;
