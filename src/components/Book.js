import React from 'react';
import { PersonContext } from '../App';

export default function Book({ book, purchaselist = false }) {
  const { name, author, img, cover, price, ratings } = book;
  const context = React.useContext(PersonContext);

  return (
    <div className="book">
      <div>
        <img src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <h4>~by {author}</h4>
          <p>{cover}</p>
          <h4 className="ratings">
            {ratings}
            <i className="material-icons-round">star_rate</i>
          </h4>
        </div>
      </div>
      {!purchaselist && (
        <div>
          <button
            className="button3"
            title="Purchase this book"
            onClick={() => context.buyBook(book)}
          >
            <span>Buy Rs. {price} only!</span>
          </button>
          <button
            className="button3"
            title="Wishlist"
            onClick={() => context.toggleFavorite(book)}
          >
            Favorite
          </button>
        </div>
      )}
    </div>
  );
}
