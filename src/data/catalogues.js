export const catalogues = [
  {
    id: "main-catalogue",
    slug: "main-catalogue",
    title: "Alufurn Main Catalogue",
    description: "Explore our complete collection of aluminium-led home solutions.",
    category: "Home Solutions",
    cover: "/alufurn-cover.jpg",
    heyzineUrl: "https://heyzine.com/flip-book/8c8f7a5bc8.html",
    featured: true,
    sortOrder: 1,
  },
];

export const sortedCatalogues = [...catalogues].sort(
  (a, b) => (a.sortOrder ?? Number.MAX_SAFE_INTEGER) - (b.sortOrder ?? Number.MAX_SAFE_INTEGER),
);
