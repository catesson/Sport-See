import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend
} from "recharts";



export default function AverageChart({data}) {

    return (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          
          <XAxis dataKey="day" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sessionLenght"
            stroke="#8884d8"
          />
          
        </LineChart>
      );
    }
