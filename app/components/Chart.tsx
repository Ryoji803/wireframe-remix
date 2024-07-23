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
import { Population, PrefectureData, RechartsData } from "~/types";

type Props = {
  populations: Population;
};

const DataFormater = (number: number) => {
  if (number > 10000) {
    return (number / 10000).toString() + "万";
  } else {
    return number.toString();
  }
};

const Chart = (props: Props) => {
  const chartData: RechartsData = [];

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
              stroke="#FF0000"
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
