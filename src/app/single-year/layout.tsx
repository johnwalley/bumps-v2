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

const years = [
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
  2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const segments = useSelectedLayoutSegments();

  const focusElement = years.findIndex(
    (year) => year === parseInt(segments[2])
  );

  return (
    <div className="container relative">
      <ExamplesNav />
      <Tabs
        defaultValue="men"
        className="relative grid w-full scroll-m-20 gap-4"
      >
        <TabsList className="h-7 rounded-md p-0 px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)] sm:flex">
          <TabsTrigger
            value="men"
            className="h-[1.45rem] rounded-sm px-2 text-sm"
            asChild
          >
            <Link href={`/single-year/${segments[0]}/men/${segments[2]}`}>
              Men
            </Link>
          </TabsTrigger>
          <TabsTrigger
            value="women"
            className="h-[1.45rem] rounded-sm px-2 text-sm"
            asChild
          >
            <Link href={`/single-year/${segments[0]}/women/${segments[2]}`}>
              Women
            </Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      {/*         <Tabs defaultValue="men" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="men" asChild>
              <Link href={`/single-year/${segments[0]}/men/${segments[2]}`}>
                Men
              </Link>
            </TabsTrigger>
            <TabsTrigger value="women">
              <Link href={`/single-year/${segments[0]}/women/${segments[2]}`}>
                Women
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs> */}
      <YearPicker skipLength={576} focusElement={focusElement} position="center">
        {years.map((year, i) => (
          <Link
            key={year}
            className={clsx(
              "border-solid border-b-4 flex flex-col justify-center cursor-pointer p-1 text-center text-sm",
              i === focusElement
                ? "border-lime-800 font-bold"
                : "border-white hover:border-zinc-300 font-normal"
            )}
            href={`/single-year/${segments[0]}/${segments[1]}/${year}`}
          >
            <div>{year}</div>
          </Link>
        ))}
      </YearPicker>
      {children}
    </div>
  );
}
