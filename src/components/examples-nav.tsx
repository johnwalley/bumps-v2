"use client";

import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("mb-4 flex items-center", className)} {...props}>
          {examples.map((example, index) => (
            <Link
              href={example.href}
              key={example.href}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                pathname?.startsWith(example.href) ||
                  (index === 0 && pathname === "/")
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {example.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}
