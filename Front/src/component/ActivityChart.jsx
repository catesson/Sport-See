
import React from "react";
import colors from "../utils/colors";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const borderRadius = 10;
const CustumBar = (props) => {
  const { x, y, width, height } = props;
  return  <g>
  <rect
    x={x + borderRadius / 2}
    y={y}
    width={width - borderRadius}
    height={height}
    fill={props.fill}
    rx={borderRadius}
    ry={borderRadius}
  />
  </g>
}





export default function ActivityChart({data}) { 
  
  return (
    <BarChart
      width={835}
      height={320}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}

      maxBarSize={200}
     
    >
      <CartesianGrid  strokeDasharray="3 3" />
      <XAxis />
      <YAxis dataKey="kilogram" orientation="right" tickCount="4" domain={["dataMin", "dataMax"]}/>
      <Tooltip />
      <Legend verticalAlign="top" align="right"/>
      <Bar dataKey="kilogram" fill={colors.fontDark} shape={<CustumBar />}  />
      <Bar dataKey="calories" fill={colors.primary}  shape={<CustumBar  />}/>
    </BarChart>
  );
}

