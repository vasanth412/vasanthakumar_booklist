import React from 'react';
import BookList from './BookList';
import { AddBook } from './AddBook';

export default function UpdateComponent({
  books,
  addItem,
  favorites,
  purchaseList,
  removeBook,
  renderComponent,
  buyBook,
  toggleFavorite,
  handleSubmit,
  onChange,
}) {
  return (
    <>
      {/* render the list of books available*/}
      {renderComponent === 'booklist' && (
        <BookList
          title="Book List"
          books={books}
          buyBook={buyBook}
          toggleFavorite={toggleFavorite}
        />
      )}
      {renderComponent === 'addbook' && (
        <AddBook
          handleSubmit={handleSubmit}
          onChange={onChange}
          addItem={addItem}
        />
      )}

      {/* render the remove book*/}
      {renderComponent === 'removebook' && (
        <BookList
          title="Remove Books"
          books={books}
          removeBook={removeBook}
          buyBook={buyBook}
          toggleFavorite={toggleFavorite}
          toggle
          purchaselist
        />
      )}

      {/* render the favorites list of books */}
      {renderComponent === 'favorites' && (
        <BookList
          title="Favorites"
          books={favorites}
          buyBook={buyBook}
          toggleFavorite={toggleFavorite}
        />
      )}

      {/* render the purchased list of books */}
      {renderComponent === 'purchaselist' && (
        <BookList
          title="Purchase List"
          books={purchaseList}
          buyBook={buyBook}
          toggleFavorite={toggleFavorite}
          purchaselist
        />
      )}
    </>
  );
}
