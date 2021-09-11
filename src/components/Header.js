import React from 'react';
import { PersonContext } from '../App';

export default function Header() {
  const context = React.useContext(PersonContext);

  return (
    <header className="head">
      <button
        className="button"
        title="Book Store"
        onClick={() => context.updateRenderComponent('bookList')}
      >
        Book Store
      </button>

      <button
        className="button4"
        title="Add book"
        onClick={() => context.updateRenderComponent('addBook')}
      >
        Add Book
      </button>

      <button
        className="button4"
        title="Remove Book"
        onClick={() => context.updateRenderComponent('removeBook')}
      >
        Remove Book
      </button>

      <button
        className="button1"
        title="Favorites"
        onClick={() => context.updateRenderComponent('favorites')}
      >
        favorite
      </button>

      <button
        className="button2"
        title="Purchase List"
        onClick={() => context.updateRenderComponent('purchaseList')}
      >
        Purchases
      </button>
    </header>
  );
}
