import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ColorMap, Population, PrefectureData, RechartsData } from "~/types";

type Props = {
  populations: Population;
};

const generateRandomColor = (existingColors: Set<string>): string => {
  let color;
  do {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 100;
    const lightness = 40;
    color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  } while (existingColors.has(color));
  return color;
};

const DataFormater = (number: number) => {
  if (number > 10000) {
    return (number / 10000).toString() + "万";
  } else {
    return number.toString();
  }
};

export const Chart = (props: Props) => {
  const chartData: RechartsData = [];
  const [colorMap, setColorMap] = useState<ColorMap>({});

  useEffect(() => {
    setColorMap((prevColorMap) => {
      const newColorMap: ColorMap = { ...prevColorMap };
      const existingColors = new Set(Object.values(newColorMap));
      let colorUpdated = false;
      Object.keys(props.populations).forEach((prefecture) => {
        if (!newColorMap[prefecture]) {
          newColorMap[prefecture] = generateRandomColor(existingColors);
          existingColors.add(newColorMap[prefecture]);
          colorUpdated = true;
        }
      });
      return colorUpdated ? newColorMap : prevColorMap;
    });
  }, [props.populations]);

  Object.entries(props.populations).forEach(
    ([prefecture, prefectureData]: [string, PrefectureData]) => {
      if (prefectureData["総人口"]) {
        prefectureData["総人口"].forEach(({ year, population }) => {
          let yearData = chartData.find((d) => d.year === `${year}`);
          if (!yearData) {
            yearData = { year: `${year}` };
            chartData.push(yearData);
          }
          yearData[prefecture] = population;
        });
      }
    },
  );

  return (
    <div className="pt-5">
      <ResponsiveContainer width="95%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            interval={1}
            label={{
              value: "年度",
              position: "insideBottomRight",
              dx: 8,
              dy: 8,
            }}
            tick={{ fontSize: 10, fill: "#000" }}
          />
          <YAxis
            interval={0}
            label={{
              value: "人口数",
              position: "insideTopLeft",
              dx: 30,
              dy: -30,
            }}
            tick={{ fontSize: 12, fill: "#000" }}
            tickFormatter={DataFormater}
          />
          <Legend layout="horizontal" verticalAlign="top" align="right" />
          {Object.keys(props.populations).map((prefecture) => (
            <Line
              key={prefecture}
              type="monotone"
              dataKey={prefecture}
              stroke={colorMap[prefecture]}
              activeDot={{ r: 8 }}
            />
          ))}
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
