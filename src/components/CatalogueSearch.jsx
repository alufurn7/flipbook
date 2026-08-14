export default function CatalogueSearch({ value, onChange }) {
  return (
    <label className="catalogue-search">
      <span className="sr-only">Search catalogues</span>
      <span aria-hidden="true" className="catalogue-search__icon">⌕</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search catalogues..."
        autoComplete="off"
      />
    </label>
  );
}
