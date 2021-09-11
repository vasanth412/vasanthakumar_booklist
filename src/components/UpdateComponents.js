import React from 'react';
import BookList from './BookList';
import { AddBook } from './AddBook';
import { PersonContext } from '../App';

export default function UpdateComponent() {
  const context = React.useContext(PersonContext);

  return (
    <>
      {/* render the list of books available*/}
      {context.renderComponent === 'bookList' && (
        <BookList tittle="Book List" books={context.books} />
      )}

      {/*Render the Add book */}
      {context.renderComponent === 'addBook' && <AddBook />}

      {/* render the remove book*/}
      {context.renderComponent === 'removeBook' && (
        <BookList
          tittle="Remove Books"
          books={context.books}
          toggle
          purchaseList
        />
      )}

      {/* render the favorites list of books */}
      {context.renderComponent === 'favorites' && (
        <BookList tittle="Favorites" books={context.favorites} checkFavorite />
      )}

      {/* render the purchased list of books */}
      {context.renderComponent === 'purchaseList' && (
        <BookList
          tittle="Purchase List"
          books={context.purchaseList}
          purchaseList
        />
      )}
    </>
  );
}
