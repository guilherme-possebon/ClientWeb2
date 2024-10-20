import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface GraphicChartProps {
  stats: number[];
}

export function GraphicChart({ stats }: GraphicChartProps) {
  const [option, setOption] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["hp", "atk", "spatk", "def", "spdef", "speed"],
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end" as const,
          horizontal: true,
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: stats,
      },
    ],
  });

  useEffect(() => {
    setOption((prevOption) => ({
      ...prevOption,
      series: [
        {
          name: "Stats",
          data: stats,
        },
      ],
    }));
  }, [stats]);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={option.options}
            series={option.series}
            type="bar"
            width="350"
          />
        </div>
      </div>
    </div>
  );
}
