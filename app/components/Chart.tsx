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

const DataFormater = (number: number) => {
  if (number > 10000) {
    return (number / 10000).toString() + "万";
  } else {
    return number.toString();
  }
};

const Chart = () => {
  const chartData = [
    {
      year: "2010年",
      Osaka: 4000,
      Tokyo: 2400,
    },
    {
      year: "2010年",
      Osaka: 4000,
      Tokyo: 2400,
    },
    {
      year: "2011年",
      Osaka: 3000,
      Tokyo: 1398,
    },
    {
      year: "2012年",
      Osaka: 2000,
      Tokyo: 9800,
    },
    {
      year: "2013年",
      Osaka: 2780,
      Tokyo: 3908,
    },
    {
      year: "2014年",
      Osaka: 1890,
      Tokyo: 4800,
    },
    {
      year: "2015年",
      Osaka: 2390,
      Tokyo: 3800,
    },
    {
      year: "2016年",
      Osaka: 3490,
      Tokyo: 4300,
    },
    {
      year: "2017年",
      Osaka: 5700,
      Tokyo: 6300,
    },
    {
      year: "2018年",
      Osaka: 5490,
      Tokyo: 3200,
    },
  ];

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
          <Line
            type="monotone"
            dataKey="Osaka"
            stroke="#FF0000"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Tokyo" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
