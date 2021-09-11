import React from 'react';
import { PersonContext } from '../App';

export function Buttons({
  book,
  purchaseList = false,
  toggle = false,
  checkFavorite = false,
}) {
  const { price } = book;
  const context = React.useContext(PersonContext);

  return (
    <>
      {!purchaseList && (
        <div>
          <button
            className="button3"
            title="Purchase this book"
            onClick={() => context.buyBook(book)}
          >
            <span>Buy Rs. {price} only!</span>
          </button>
          {!checkFavorite ? (
            <button
              className="button3"
              title="Wishlist"
              onClick={() => context.toggleFavorite(book)}
            >
              Favorite
            </button>
          ) : (
            <button
              className="button3"
              title="Remove wishlist"
              onClick={() => context.removeFavorite(book)}
            >
              Remove Favorite
            </button>
          )}
        </div>
      )}
      {toggle && (
        <button
          className="button3"
          title="Remove"
          onClick={() => context.removeBook(book)}
        >
          Remove
        </button>
      )}
    </>
  );
}
