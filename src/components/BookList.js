import React from 'react';
import Book from './Book';

export default function BookList({
  title,
  books,
  purchaselist,
  toggle,
  removeBook,
  buyBook,
  toggleFavorite,
}) {
  return (
    <>
      <section>
        <div>{title}</div>
        {books.length === 0 ? (
          <p>No Books in {title}...!</p>
        ) : (
          <div className="booklist">
            {books.map((book) => (
              <Book
                key={`${book.id}-${Date.now()}`}
                book={book}
                purchaselist={purchaselist}
                toggle={toggle}
                removeBook={removeBook}
                buyBook={buyBook}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
        <hr />
      </section>
    </>
  );
}
