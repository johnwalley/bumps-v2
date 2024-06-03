"use client";

import { MagnifyingGlassIcon, TriangleDownIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  usePathname,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegments,
} from "next/navigation";
import { YearPicker } from "@/components/year-picker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { models, types } from "./data/models";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Suspense, useCallback } from "react";
import { Blades } from "./components/blades";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const segments = useSelectedLayoutSegments();

  const years: string[] = (results as any)["eights"]["men"];

  const focusElement = years.findIndex((year) => year === segments[2]);

  return (
    <div className="container relative lg:grid items-stretch gap-6 lg:grid-cols-[1fr_400px]">
      <div className="lg:hidden flex flex-col space-y-2 mt-2 mb-4">
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
      <div className="hidden lg:block order-2 border-l py-4">
        <div className="flex flex-col space-y-2 px-4">
          <Select
            value={segments[0]}
            onValueChange={(value) => {
              router.push(`/charts/${value}/${segments[1]}/${segments[2]}`);
            }}
          >
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select an event" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Cambridge</SelectLabel>
                <SelectItem value="lents">Lent Bumps</SelectItem>
                <SelectItem value="mays">May Bumps</SelectItem>
                <SelectItem value="town">Town Bumps</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Oxford</SelectLabel>
                <SelectItem value="torpids">Torpids</SelectItem>
                <SelectItem value="eights">Summer Eights</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Label htmlFor="model">Gender</Label>
          <RadioGroup defaultValue="men">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="men" id="men" />
              <Label htmlFor="men">Men</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="women" id="women" />
              <Label htmlFor="women">Women</Label>
            </div>
          </RadioGroup>
          <div>
            <HoverCard openDelay={200}>
              <HoverCardTrigger asChild>
                <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Year
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-[320px] text-sm" side="left">
                The first recorded bumps race was 1815.
              </HoverCardContent>
            </HoverCard>
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
          <div className="items-top flex space-x-2">
            <Suspense>
              <Blades />
            </Suspense>
          </div>
          <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
