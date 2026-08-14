import { useEffect } from "react";

const upsertMeta = (name, content) => {
  let element = document.head.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    upsertMeta("description", description);
  }, [description, title]);
}
