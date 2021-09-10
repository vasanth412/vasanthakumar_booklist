import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import UpdateComponent from './components/UpdateComponents';
import data from './data';

function App() {
  const [books, setBooks] = useState(data);
  const [favorites, setFavorites] = useState([]);
  const [purchaseList, setpurchaseList] = useState([]);
  const [renderComponent, setrenderComponent] = useState('booklist');
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
    <>
      <Header updateRenderComponent={updateRenderComponent} />
      <UpdateComponent
        books={books}
        addItem={addItem}
        favorites={favorites}
        purchaseList={purchaseList}
        removeBook={removeBook}
        renderComponent={renderComponent}
        buyBook={buyBook}
        toggleFavorite={toggleFavorite}
        handleSubmit={handleSubmit}
        onChange={onChange}
      />
    </>
  );
}

export default App;
