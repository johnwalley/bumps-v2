import { MainNavItem, SidebarNavItem } from "../types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Single-year results",
      href: "/single-year",
    },
    {
      title: "Multi-year results",
      href: "/multi-year",
    },
  ],
  sidebarNav: [
    {
      title: "Single-year results",
      items: [
        {
          title: "Eights",
          href: "/single-year/eights",
          items: [],
        },
        {
          title: "Lents",
          href: "/single-year/lents",
          items: [],
        },
      ],
    },
    {
      title: "Multi-year results",
      items: [
        {
          title: "Eights",
          href: "/multi-year/eights",
          items: [],
        },
        {
          title: "Lents",
          href: "/multi-year/lents",
          items: [],
        },
      ],
    },
  ],
};
