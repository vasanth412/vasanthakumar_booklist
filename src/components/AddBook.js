import React from 'react';
import { PersonContext } from '../App';

export function AddBook() {
  const context = React.useContext(PersonContext);

  return (
    <form className="form-style-2" onSubmit={context.handleSubmit}>
      <div>
        <input
          type="text"
          id="id"
          name="id"
          placeholder="ID"
          value={context.addItem.id}
          onChange={context.onChange}
          required
        />
        <input
          type="url"
          id="img"
          name="img"
          placeholder="Image url"
          value={context.addItem.img}
          onChange={context.onChange}
          required
        />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={context.addItem.name}
          onChange={context.onChange}
          required
        />
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author Name"
          value={context.addItem.author}
          onChange={context.onChange}
          required
        />
        <input
          type="text"
          id="cover"
          name="cover"
          placeholder="Cover"
          value={context.addItem.cover}
          onChange={context.onChange}
          required
        />
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Price"
          value={context.addItem.price}
          onChange={context.onChange}
          required
        />
        <input
          type="text"
          id="ratings"
          name="ratings"
          placeholder="Ratings"
          value={context.addItem.ratings}
          onChange={context.onChange}
          required
        />
      </div>
      <button type="submit" className="button5">
        Add Book
      </button>
    </form>
  );
}
