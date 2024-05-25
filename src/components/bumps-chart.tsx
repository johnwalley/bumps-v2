"use client";

import Chart from "react-bumps-chart";
import classes from "./bumps-chart.module.css";

export function BumpsChart({ data }: { data: any }) {
  return (
    <div className={classes.chart}>
      <Chart data={data} />
    </div>
  );
}
