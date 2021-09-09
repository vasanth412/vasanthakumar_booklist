import React from 'react';
import BookList from './BookList';
import { PersonContext } from '../App';

export default function UpdateComponent({ renderComponent }) {
  const context = React.useContext(PersonContext);
  return (
    <>
      {/* render the list of books available*/}
      {renderComponent === 'booklist' && (
        <BookList title="Book List" books={context.books} />
      )}

      {/* render the favorites list of books */}
      {renderComponent === 'favorites' && (
        <BookList title="Favorites" books={context.favorites} />
      )}

      {/* render the purchased list of books */}
      {renderComponent === 'purchaselist' && (
        <BookList
          title="Purchase List"
          books={context.purchaseList}
          purchaselist
        />
      )}
    </>
  );
}
