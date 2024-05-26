import results from "../../../data/results.json";
import dynamic from "next/dynamic";

const BumpsChart = dynamic(() => import("@/components/bumps-chart"), {
  ssr: false,
});

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
    return (
      <div className="text-center mb-4">
        We have no results to show for this year
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center mb-4">
      <div className="w-full min-w-[320px] max-w-[520px]">
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

  return paths;
}
