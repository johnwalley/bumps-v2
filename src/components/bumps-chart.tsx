"use client";

import Chart from "react-bumps-chart";
import classes from "./bumps-chart.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function BumpsChart({ data }: { data: any }) {
  const searchParams = useSearchParams();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
  }, []);

  return (
    <div
      className={classes.chart}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <Chart
        data={data}
        blades={searchParams.get("blades") === "true"}
        spoons={searchParams.get("spoons") === "true"}
      />
    </div>
  );
}
