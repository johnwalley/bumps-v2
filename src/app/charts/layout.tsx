"use client";

import { TriangleDownIcon } from "@radix-ui/react-icons";

import { useSelectedLayoutSegments } from "next/navigation";
import { YearPicker } from "@/components/year-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { ExamplesNav } from "@/components/examples-nav";
import results from "./data/results.json";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const segments = useSelectedLayoutSegments();

  const years: string[] = (results as any)["eights"]["men"];

  const focusElement = years.findIndex((year) => year === segments[2]);

  return (
    <div className="container relative">
      <div className="flex flex-col space-y-2 mt-2 mb-4">
        <ExamplesNav />
        <Tabs
          value={segments[1]}
          className="relative grid w-full scroll-m-20 gap-4"
        >
          <TabsList className="h-7 rounded-md p-0 px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)] sm:flex">
            <TabsTrigger
              value="men"
              className="h-[1.45rem] rounded-sm px-2 text-sm"
              asChild
            >
              <Link href={`/charts/${segments[0]}/men/${segments[2]}`}>
                Men
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="women"
              className="h-[1.45rem] rounded-sm px-2 text-sm"
              asChild
            >
              <Link href={`/charts/${segments[0]}/women/${segments[2]}`}>
                Women
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <YearPicker
          skipLength={576}
          focusElement={focusElement}
          position="center"
        >
          {years.map((year, i) => (
            <Link
              key={year}
              href={`/charts/${segments[0]}/${segments[1]}/${year}`}
            >
              {year}
            </Link>
          ))}
        </YearPicker>
      </div>
      {children}
    </div>
  );
}
