export default function CatalogueFilters({ categories, activeCategory, onChange }) {
  if (categories.length < 2) return null;

  return (
    <div className="catalogue-filters" aria-label="Filter catalogues by category">
      {["All", ...categories].map((category) => {
        const active = category === activeCategory;
        return (
          <button
            key={category}
            className={active ? "is-active" : ""}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
