import { Icons } from "@/components/icons";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>
          There is nothing — absolutely nothing — half so much worth doing as
          simply messing about in boats.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Bumps charts, statistics, and more.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/charts/" className={cn(buttonVariants())}>
            Bumps charts
          </Link>
          <Link
            href="/about"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            What&apos;s it all about?
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  );
}
