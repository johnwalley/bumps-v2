"use client";

import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();

  const examples = [
    {
      name: "Eights",
      href: `/single-year/eights/${segments[1]}/${segments[2]}`,
    },
    {
      name: "Lents",
      href: `/single-year/lents/${segments[1]}/${segments[2]}`,
    },
    {
      name: "Mays",
      href: `/single-year/mays/${segments[1]}/${segments[2]}`,
    },
    {
      name: "Torpids",
      href: `/single-year/torpids/${segments[1]}/${segments[2]}`,
    },
    {
      name: "Town",
      href: `/single-year/town/${segments[1]}/${segments[2]}`,
    },
  ];

  return (
    <div className="relative">
      <ScrollArea className="lg:max-w-none">
        <Tabs
          value={segments[0]}
          className="relative grid w-full scroll-m-20 gap-4"
        >
          <TabsList className="h-7 rounded-md p-0 px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)] sm:flex">
            {examples.map((example, index) => (
              <TabsTrigger
                key={example.href}
                value={example.name.toLowerCase()}
                className="h-[1.45rem] rounded-sm px-2 text-sm"
                asChild
              >
                <Link
                  href={example.href}
                  className={cn(
                    "flex h-7 items-center justify-center rounded-full text-center text-sm transition-colors hover:text-primary",
                    pathname?.startsWith(example.href) ||
                      (index === 0 && pathname === "/")
                      ? "bg-muted font-medium text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {example.name}
                </Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}
