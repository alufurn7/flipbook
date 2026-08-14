import { Route, Routes } from "react-router-dom";
import CatalogueLibrary from "./pages/CatalogueLibrary";
import CatalogueReader from "./pages/CatalogueReader";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CatalogueLibrary />} />
      <Route path="/catalogue/:slug" element={<CatalogueReader />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
