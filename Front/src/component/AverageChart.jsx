import "../style/componentStyles.css";
import React, { useMemo } from "react";
import PropTypes from 'prop-types'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
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

const dayMaping = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
};



export default function AverageChart({ data }) {
  const cleanData = useMemo(
    () =>
      data.map((item) => ({
        ...item,
        day: dayMaping[item.day],
      })),
    [data]
  );

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
          data={cleanData}
          margin={{
            top: 5,
            right: 15,
            left: 15,
            bottom: 5,
          }}
        >
          <XAxis
            strokeWidth={2}
            axisLine={false}
            tickLine={false}
            dataKey="day"
            tick={{fill:"#fff"}}
            
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
AverageChart.propTypes = {
  data : PropTypes.array
}