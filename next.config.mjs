/** @type {import('next').NextConfig} */

/* import results from "./src/app/charts/data/results.json" assert { type: `json` };

const events = ["eights", "lents", "mays", "torpids", "town"];
const genders = ["men", "women"];

const paths = events.flatMap((event) =>
  genders.flatMap((gender) =>
    results[event][gender].map((year) => ({
      event,
      gender,
      year,
    }))
  )
); 

const eventRedirects = events.map((event) => ({
  source: `/charts/${event}`,
  destination: `/charts/${event}/men/2024`,
}));

*/

const nextConfig = {
  redirects() {
    return [
      {
        source: "/charts",
        destination: "/charts/eights/men/2024",
        permanent: false,
      },
      {
        source: "/charts/:event",
        destination: "/charts/:event/men/2024",
        permanent: false,
      },
      {
        source: "/charts/:event/:gender",
        destination: "/charts/:event/:gender/2024",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
