import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CatalogueLoader from "../components/CatalogueLoader";
import { catalogues } from "../data/catalogues";
import usePageMeta from "../hooks/usePageMeta";

const isUsableHeyzineUrl = (url) => {
  if (!url || /REPLACE/i.test(url)) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && (
      parsed.hostname === "heyzine.com" || parsed.hostname.endsWith(".heyzine.com")
    );
  } catch {
    return false;
  }
};

export default function CatalogueReader() {
  const { slug } = useParams();
  const catalogue = catalogues.find((item) => item.slug === slug);
  const [isLoading, setIsLoading] = useState(true);

  usePageMeta(
    catalogue ? `${catalogue.title} | Alufurn` : "Catalogue not found | Alufurn",
    catalogue?.description ?? "The requested Alufurn catalogue could not be found.",
  );

  useEffect(() => {
    document.body.classList.add("reader-open");
    return () => document.body.classList.remove("reader-open");
  }, []);

  if (!catalogue) {
    return (
      <main className="reader-message">
        <span className="reader-message__mark">A</span>
        <p className="eyebrow">Alufurn catalogue library</p>
        <h1>Catalogue not found</h1>
        <p>The catalogue you&apos;re looking for may have moved or is no longer available.</p>
        <Link className="button-link" to="/">← Back to Catalogue Library</Link>
      </main>
    );
  }

  const hasReader = isUsableHeyzineUrl(catalogue.heyzineUrl);

  return (
    <div className={`reader-page${hasReader ? " reader-page--immersive" : ""}`}>
      {!hasReader && (
        <header className="reader-header">
          <Link className="reader-back" to="/" aria-label="Back to catalogue library"><span aria-hidden="true">←</span><span className="reader-back__label">Catalogues</span></Link>
          <h1>{catalogue.title}</h1>
          <span className="reader-header__spacer" />
        </header>
      )}

      <main className="reader-stage">
        {hasReader ? (
          <div className={`reader-frame${isLoading ? " is-loading" : ""}`}>
            <Link className="reader-floating-back" to="/" aria-label="Back to catalogue library">
              <span aria-hidden="true">←</span>
              <span>Catalogues</span>
            </Link>
            {isLoading && <CatalogueLoader />}
            <iframe
              src={catalogue.heyzineUrl}
              title={`${catalogue.title} interactive flipbook`}
              allow="fullscreen"
              allowFullScreen
              loading="eager"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        ) : (
          <section className="reader-unavailable">
            <span className="reader-message__mark">A</span>
            <p className="eyebrow">{catalogue.category}</p>
            <h2>This catalogue is currently unavailable.</h2>
            <p>The digital edition is being prepared. Please check back soon.</p>
            <Link className="button-link" to="/">← Back to Catalogue Library</Link>
          </section>
        )}
      </main>
    </div>
  );
}
