import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found | Alufurn", "The requested page could not be found.");

  return (
    <main className="reader-message">
      <span className="reader-message__mark">A</span>
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link className="button-link" to="/">← Back to Catalogue Library</Link>
    </main>
  );
}
