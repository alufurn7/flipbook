import CatalogueCard from "./CatalogueCard";

export default function CatalogueGrid({ catalogues }) {
  if (!catalogues.length) {
    return <div className="catalogue-empty" role="status">No catalogues available yet.</div>;
  }

  return (
    <div className="catalogue-grid">
      {catalogues.map((catalogue, index) => (
        <CatalogueCard key={catalogue.id} catalogue={catalogue} priority={index === 0} />
      ))}
    </div>
  );
}
