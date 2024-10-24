import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface GraphicChartProps {
  stats: number[];
}

export function GraphicChart({ stats }: GraphicChartProps) {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
      height: 350,
    },
    xaxis: {
      categories: [
        "Health Points",
        "Attack",
        "Special Attack",
        "Defense",
        "Special Defense",
        "Speed",
      ],
      labels: {
        style: {
          fontSize: "1rem",
          fontWeight: "bold",
          colors: ["#000000"],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "1rem",
          fontWeight: "bold",
          colors: ["#000"],
        },
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: true,
        barHeight: "85%",
      },
    },
    series: [
      {
        name: "Stats",
        data: stats,
      },
    ],
    dataLabels: {
      enabled: false,
    },
    colors: ["#F24405", "#FA7F08", "#042940", "#DBF227", "#0CF25D", "#7A577A"], // Cores diferentes para cada barra
    legend: {
      show: false,
    },
  });

  useEffect(() => {
    setOptions((prevOption) => ({
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
            options={options}
            series={options.series}
            type="bar"
            width="350"
          />
        </div>
      </div>
    </div>
  );
}
