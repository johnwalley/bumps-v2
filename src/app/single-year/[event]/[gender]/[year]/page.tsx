import Image from "next/image";

export default function Home({
  params,
}: {
  params: { event: string; gender: string; year: string };
}) {
  return (
    <div>
      {params.event}/{params.gender}/{params.year}
    </div>
  );
}
