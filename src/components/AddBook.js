export function AddBook({ handleSubmit, onChange, addItem }) {
  return (
    <form className="form-style-2" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="id"
          name="id"
          placeholder="ID"
          value={addItem.id}
          onChange={onChange}
          required
        />
        <input
          type="url"
          id="img"
          name="img"
          placeholder="Image url"
          value={addItem.img}
          onChange={onChange}
          required
        />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={addItem.name}
          onChange={onChange}
          required
        />
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author Name"
          value={addItem.author}
          onChange={onChange}
          required
        />
        <input
          type="text"
          id="cover"
          name="cover"
          placeholder="Cover"
          value={addItem.cover}
          onChange={onChange}
          required
        />
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Price"
          value={addItem.price}
          onChange={onChange}
          required
        />
        <input
          type="text"
          id="ratings"
          name="ratings"
          placeholder="Ratings"
          value={addItem.ratings}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit" className="button5">
        Add Book
      </button>
    </form>
  );
}
