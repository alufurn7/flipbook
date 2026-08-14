export default function CatalogueLoader() {
  return (
    <div className="reader-loader" role="status" aria-live="polite">
      <span className="reader-loader__brand">ALUFURN</span>
      <span className="reader-loader__spinner" aria-hidden="true" />
      <span>Loading catalogue…</span>
    </div>
  );
}
