import React from "react";
import "../style/componentStyles.css";
import colors from "../utils/colors";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ScoreChart({data}) {
  console.log(data)
  return (
    <div className="score-chart">
        <p className="score-chart__title">Score</p>
    <ResponsiveContainer width="100%" height={191} >
      <RadialBarChart

        cx="50%"
        cy="50%"
        innerRadius="100%"
        outerRadius="100%"
        startAngle={90}
        endAngle={270}
        barSize={10}
        data={data}
      >
        <RadialBar
          minAngle={10}
          background={true}
          fill={colors.primary}
            dataKey="value"
            cornerRadius={10}
        />

      </RadialBarChart>
    </ResponsiveContainer>
    <div className="score-chart__value" ><h2><span>{data[0].value} % </span> <br/> de votre <br/> objectif</h2></div>
     

    </div>
  );
}
