import React from 'react';

export default function Book({
  book,
  purchaselist = false,
  toggle = false,
  removeBook,
  buyBook,
  toggleFavorite,
}) {
  const { id, name, author, img, cover, price, ratings } = book;

  return (
    <div className="book">
      <div>
        <img src={img} alt={name} />
        <div>
          <h3>
            {id}. {name}
          </h3>
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
            onClick={() => buyBook(book)}
          >
            <span>Buy Rs. {price} only!</span>
          </button>
          <button
            className="button3"
            title="Wishlist"
            onClick={() => toggleFavorite(book)}
          >
            Favorite
          </button>
        </div>
      )}
      {toggle && (
        <button
          className="button3"
          title="Remove"
          onClick={() => removeBook(book)}
        >
          Remove
        </button>
      )}
    </div>
  );
}
