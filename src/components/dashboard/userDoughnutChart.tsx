// src/components/UserDoughnutChart.tsx
"use client";
import React, { useEffect, useRef } from "react";
import {
  Chart,
  registerables,
  DoughnutController,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js/auto"; // Use 'chart.js/auto' for automatic import

interface UserDoughnutChartProps {
  data: number[]; // An array representing the total users for each month
  labels: string[]; // An array of month names
}

const UserDoughnutChart: React.FC<UserDoughnutChartProps> = ({
  data,
  labels,
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<"doughnut", number[], string> | null>(
    null
  );

  useEffect(() => {
    Chart.register(
      DoughnutController,
      ArcElement,
      Legend,
      Tooltip,
      ...registerables
    ); // Register necessary plugins

    if (chartInstanceRef.current) {
      // Destroy the previous Chart instance
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstanceRef.current = new Chart<"doughnut", number[], string>(
          ctx,
          {
            type: "doughnut",

            data: {
              labels: labels,
              datasets: [
                {
                  data: data,
                  backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                    "#FF9F40",
                  ],
                },
              ],
            },
            options: {
              plugins: {
                legend: {
                  position: "left",
                  align: "center", // Adjust alignment if needed
                },
              },
              aspectRatio: 2, // Adjust the aspect ratio as needed
              responsive: true,
            },
          }
        );
      }
    }

    // Cleanup: Destroy the Chart when the component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default UserDoughnutChart;
