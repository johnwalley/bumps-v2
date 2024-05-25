import { BumpsChart } from "@/components/bumps-chart";
import results from "../../../data/results.json";
export default async function Home({
  params,
}: {
  params: { event: string; gender: string; year: string };
}) {
  const res = await fetch(
    `https://api.cambridgebumps.com/api/history?event=${params.event}&gender=${params.gender}&start=${params.year}&end=${params.year}`
  );

  const data = await res.json();

  if (!data || data.crews.length === 0) {
    return <div>We have no results to show for this year</div>;
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full md:w-[520]">
        <BumpsChart data={data} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const events = ["eights", "lents", "mays", "torpids", "town"];
  const genders = ["men", "women"];

  const paths = events.flatMap((event) =>
    genders.flatMap((gender) =>
      (results as any)[event][gender].map((year: string) => ({
        event,
        gender,
        year,
      }))
    )
  );

  console.log(paths);

  return paths;
}
