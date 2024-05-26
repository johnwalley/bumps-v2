"use client";

import Chart from "react-bumps-chart";
import classes from "./bumps-chart.module.css";
import { useEffect, useState } from "react";

export default function BumpsChart({ data }: { data: any }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
  }, []);

  return (
    <div
      className={classes.chart}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <Chart data={data} />
    </div>
  );
}
