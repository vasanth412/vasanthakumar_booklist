export default function Header({ updateRenderComponent }) {
  return (
    <header>
      <button
        className="button"
        onClick={() => updateRenderComponent('booklist')}
      >
        Book Store
      </button>
      <div>
        <button
          className="button1"
          onClick={() => updateRenderComponent('favorites')}
        >
          favorite
        </button>
        <button
          className="button2"
          onClick={() => updateRenderComponent('purchaselist')}
        >
          Purchases
        </button>
      </div>
    </header>
  );
}
