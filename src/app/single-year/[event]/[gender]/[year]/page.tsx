import { BumpsChart } from "@/components/bumps-chart";

export default async function Home({
  params,
}: {
  params: { event: string; gender: string; year: string };
}) {
  console.error(
    "params",
    `https://api.cambridgebumps.com/api/history?event=${params.event}&gender=${params.gender}?start=${params.year}&end=${params.year}`
  );
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
