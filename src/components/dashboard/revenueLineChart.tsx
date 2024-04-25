// src/components/RevenueLineChart.tsx
"use client";
import React, { useEffect, useRef } from "react";
import {
  Chart,
  registerables,
  LineController,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js/auto";

interface RevenueLineChartProps {
  data: number[]; // An array representing the revenue for each month
  labels: string[]; // An array of month names
}

const RevenueLineChart: React.FC<RevenueLineChartProps> = ({
  data,
  labels,
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<"line", number[], string> | null>(null);

  useEffect(() => {
    Chart.register(
      LineController,
      LineElement,
      Legend,
      Tooltip,
      ...registerables
    );

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstanceRef.current = new Chart<"line", number[], string>(ctx, {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Monthly Revenue",
                data: data,
                fill: false,
                borderColor: "#4BC0C0", // You can customize the line color as needed
              },
            ],
          },
        });
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default RevenueLineChart;
