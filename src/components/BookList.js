import React from 'react';
import Book from './Book';

export default function BookList({ title, books, purchaselist }) {
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
              />
            ))}
          </div>
        )}
        <hr />
      </section>
    </>
  );
}
 