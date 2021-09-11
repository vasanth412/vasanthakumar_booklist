import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import UpdateComponent from './components/UpdateComponents';
import data from './data';

export const PersonContext = React.createContext();

function App() {
  const [books, setBooks] = useState(data);
  const [favorites, setFavorites] = useState([]);
  const [purchaseList, setPurchaseList] = useState([]);
  const [renderComponent, setRenderComponent] = useState('bookList');
  const [addItem, setAddItem] = useState({
    id: '',
    name: '',
    author: '',
    img: '',
    cover: '',
    price: '',
    ratings: '',
  });

  // set the name of component
  const updateRenderComponent = (component) => {
    setRenderComponent(component);
  };

  // check if the book is in the wish list or not
  const isFavorite = (book) => {
    return favorites.filter((item) => item.id === book.id).length !== 0;
  };
  // add the book to purchased books list
  const buyBook = (book) => {
    setPurchaseList([...purchaseList, book]);
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

  //Remove from favorite
  const removeFavorite = (book) => {
    const newFavorites = favorites.filter((item) => item.id !== book.id);
    setFavorites(newFavorites);
  };

  //Remove book from the list
  const removeBook = (book) => {
    const newBookList = books.filter((item) => item.id !== book.id);
    setBooks(newBookList);

    const removeFavorites = favorites.filter((item) => item.id !== book.id);
    setFavorites(removeFavorites);
  };

  // using form
  const onChange = (e) => {
    setAddItem((item) => {
      return { ...item, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks((books) => [...books, addItem]);
    setAddItem({
      id: '',
      name: '',
      author: '',
      img: '',
      cover: '',
      price: '',
      ratings: '',
    });
  };

  return (
    <PersonContext.Provider
      value={{
        updateRenderComponent,
        renderComponent,
        buyBook,
        addItem,
        removeBook,
        removeFavorite,
        isFavorite,
        toggleFavorite,
        books,
        favorites,
        purchaseList,
        onChange,
        handleSubmit,
      }}
    >
      <Header />
      <UpdateComponent />
    </PersonContext.Provider>
  );
}

export default App;
