export default function Header({ updateRenderComponent }) {
  return (
    <header>
      <button
        className="button"
        title="Book Store"
        onClick={() => updateRenderComponent('booklist')}
      >
        Book Store
      </button>

      <button
        className="button4"
        title="Add book"
        onClick={() => updateRenderComponent('addbook')}
      >
        Add Book
      </button>

      <button
        className="button4"
        title="Remove Book"
        onClick={() => updateRenderComponent('removebook')}
      >
        Remove Book
      </button>

      <button
        className="button1"
        title="Favorites"
        onClick={() => updateRenderComponent('favorites')}
      >
        favorite
      </button>

      <button
        className="button2"
        title="Purchase List"
        onClick={() => updateRenderComponent('purchaselist')}
      >
        Purchases
      </button>
    </header>
  );
}
