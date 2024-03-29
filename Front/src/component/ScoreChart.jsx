import React from "react";
import "../style/componentStyles.css";
import colors from "../utils/colors";
import PropTypes from 'prop-types' 
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

/**
 * This is a description of the function VerticalNav.
 * @function
 * @name ScoreChart
 * @param {object} data content the value of the score
 * @return {JSX.Element} Score chart .
 */
export default function ScoreChart({data}) {
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


ScoreChart.propTypes = {
  0 : PropTypes.objectOf(PropTypes.shape({
    value : PropTypes.number
  }))
}