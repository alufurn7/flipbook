import { useState } from "react";
import { Link } from "react-router-dom";

export default function CatalogueCard({ catalogue, priority = false }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className={`catalogue-card${catalogue.featured ? " catalogue-card--featured" : ""}`}>
      <Link className="catalogue-card__link" to={`/catalogue/${catalogue.slug}`} aria-label={`View ${catalogue.title}`}>
        <div className={`catalogue-card__cover${imageFailed ? " catalogue-card__cover--fallback" : ""}`}>
          {!imageFailed ? (
            <img
              src={catalogue.cover}
              alt={`${catalogue.title} cover`}
              width="720"
              height="1080"
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              decoding="async"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <span className="catalogue-card__fallback-mark" aria-hidden="true">A</span>
          )}
          {catalogue.featured && <span className="catalogue-card__badge">Featured</span>}
        </div>

        <div className="catalogue-card__content">
          {catalogue.category && <p className="catalogue-card__category">{catalogue.category}</p>}
          <h2>{catalogue.title}</h2>
          {catalogue.description && <p className="catalogue-card__description">{catalogue.description}</p>}
          <span className="catalogue-card__cta">View catalogue <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}
