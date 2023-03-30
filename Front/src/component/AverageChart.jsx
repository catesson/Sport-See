import "../style/componentStyles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const TooltipContent = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div
        style={{
          y: 0,
          height: "186px",
          width: "100000000%",
          background: "#0000001a",
        }}
      >
        {" "}
        <div className="average-tooltips">
          <p className="tooltips-police">{payload[0].value} min</p>
        </div>
      </div>
    );
  }

  return null;
};


export default function AverageChart({ data }) {
  return (
    <div className="average-chart">
      <p className="average-chart__title">Durée moyenne des sessions</p>
      <ResponsiveContainer
        width="100%"
        height={186}
        minWidth={150}
        maxWidth={600}
      >
        <LineChart
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis
            stroke="white"
            tickSize={7}
            axisLine={false}
            tickLine={false}
            dataKey="day"
          />
          <YAxis
            dataKey="sessionLenght"
            hide={true}
            domain={["dataMin - 10", "dataMax +10"]}
          />

          <Tooltip
            offset={0}
            wrapperStyle={{ outline: "0px" }}
            content={<TooltipContent />}
          />
          <Line
            dot={false}
            type="natural"
            dataKey="sessionLenght"
            stroke="white"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
