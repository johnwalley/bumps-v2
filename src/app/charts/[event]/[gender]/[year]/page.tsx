import summary from "../../../data/results.json";
import dynamic from "next/dynamic";
import results from "../../../../../data/data.json";
import { transformData, joinEvents } from "bumps-results-tools";

const SET = {
  EIGHTS: "Summer Eights",
  TORPIDS: "Torpids",
  LENTS: "Lent Bumps",
  MAYS: "May Bumps",
  TOWN: "Town Bumps",
};

const set = {
  eights: SET.EIGHTS,
  torpids: SET.TORPIDS,
  lents: SET.LENTS,
  mays: SET.MAYS,
  town: SET.TOWN,
};

const BumpsChart = dynamic(() => import("@/components/bumps-chart"), {
  ssr: false,
});

export default async function Home({
  params,
}: {
  params: { event: string; gender: string; year: string };
}) {
  const data = results
    .filter(
      (result) => result.gender.toLowerCase() === params.gender.toLowerCase()
    )
    .filter(
      (result) => result.small.toLowerCase() === params.event.toLowerCase()
    )
    .filter((result) => result.year >= +params.year)
    .filter((result) => result.year <= +params.year)
    .map(transformData);

  const joinedEvents = joinEvents(data, params.event, params.gender);

  joinedEvents.small = params.event;
  joinedEvents.gender = params.gender;
  joinedEvents.set = set[params.event as keyof typeof set];

  if (!joinedEvents || joinedEvents.crews.length === 0) {
    return (
      <div className="text-center mb-4">
        We have no results to show for this year
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center mb-4">
      <div className="w-full min-w-[320px] max-w-[520px]">
        <BumpsChart data={joinedEvents} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const events = ["eights", "lents", "mays", "torpids", "town"];
  const genders = ["men", "women"];

  const paths = events.flatMap((event) =>
    genders.flatMap((gender) =>
      (summary as any)[event][gender].map((year: string) => ({
        event,
        gender,
        year,
      }))
    )
  );

  return paths;
}
