import { useMemo, useState } from "react";
import CatalogueFilters from "../components/CatalogueFilters";
import CatalogueGrid from "../components/CatalogueGrid";
import CatalogueSearch from "../components/CatalogueSearch";
import Header from "../components/Header";
import { sortedCatalogues } from "../data/catalogues";
import usePageMeta from "../hooks/usePageMeta";

const SEARCH_THRESHOLD = 7;

export default function CatalogueLibrary() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  usePageMeta(
    "Alufurn Catalogues | Aluminium Doors & Home Solutions",
    "Discover Alufurn's premium aluminium doors, furniture and complete home solutions catalogues.",
  );

  const categories = useMemo(
    () => [...new Set(sortedCatalogues.map((item) => item.category).filter(Boolean))],
    [],
  );

  const filteredCatalogues = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return sortedCatalogues.filter((catalogue) => {
      const matchesCategory = activeCategory === "All" || catalogue.category === activeCategory;
      const searchable = [catalogue.title, catalogue.category, catalogue.description].filter(Boolean).join(" ").toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, query]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="library-page">
      <Header />
      <main>
        <section className="library-hero">
          <div className="page-shell">
            <p className="eyebrow">Alufurn collection library</p>
            <h1>Explore Our Catalogues</h1>
            <p>Discover Alufurn&apos;s premium aluminium doors, furniture and complete home solutions.</p>
          </div>
        </section>

        <section className="catalogue-section" aria-labelledby="catalogue-heading">
          <div className="page-shell">
            <div className="catalogue-toolbar">
              <div>
                <p className="catalogue-count"><span>{filteredCatalogues.length}</span> {filteredCatalogues.length === 1 ? "catalogue" : "catalogues"}</p>
                <h2 id="catalogue-heading" className="sr-only">Catalogue library</h2>
              </div>
              {sortedCatalogues.length >= SEARCH_THRESHOLD && <CatalogueSearch value={query} onChange={setQuery} />}
            </div>
            <CatalogueFilters categories={categories} activeCategory={activeCategory} onChange={handleCategoryChange} />
            <CatalogueGrid catalogues={filteredCatalogues} />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-shell"><span>ALUFURN</span><span>Designed for considered spaces.</span></div>
      </footer>
    </div>
  );
}
