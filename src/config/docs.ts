import { MainNavItem, SidebarNavItem } from "../types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Charts",
      href: "/single-year",
    },
    {
      title: "What's it all about?",
      href: "/about",
    },
  ],
  sidebarNav: [
    {
      title: "Events",
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
        {
          title: "Mays",
          href: "/single-year/mays",
          items: [],
        },
        {
          title: "Torpids",
          href: "/single-year/torpids",
          items: [],
        },
        {
          title: "Town",
          href: "/single-year/town",
          items: [],
        },
      ],
    },
  ],
};
