import React from 'react';
import Book from './Book';

export default function BookList({
  tittle,
  books,
  purchaseList,
  checkFavorite,
  toggle,
}) {
  return (
    <>
      <section>
        <div>{tittle}</div>
        {books.length === 0 ? (
          <p>No Books in {tittle}...!</p>
        ) : (
          <div className="bookList">
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
                toggle={toggle}
                purchaseList={purchaseList}
                checkFavorite={checkFavorite}
              />
            ))}
          </div>
        )}
        <hr />
      </section>
    </>
  );
}
