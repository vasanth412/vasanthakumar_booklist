import React from 'react';
import { Buttons } from './Buttons';

export default function Book({ book, purchaseList, toggle, checkFavorite }) {
  const { id, name, author, img, cover, ratings } = book;

  return (
    <div className="book">
      <img src={img} alt={name} />
      <h3>
        {id}. {name}
      </h3>
      <h4>~by {author}</h4>
      <p>{cover}</p>
      <h4 className="ratings">
        {ratings}
        <i className="material-icons-round">star_rate</i>
      </h4>
      <Buttons
        book={book}
        purchaseList={purchaseList}
        toggle={toggle}
        checkFavorite={checkFavorite}
      />
    </div>
  );
}
