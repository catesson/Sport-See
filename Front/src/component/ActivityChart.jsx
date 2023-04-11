import React from "react";
import "../style/componentStyles.css";
import colors from "../utils/colors";
import PropTypes from 'prop-types'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer} from "recharts";

const TooltipContent = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div
        className="tooltips"
      >
        <p >{payload[0].value}kg</p>
        <p >{payload[1].value}Kcal</p>
      </div>
    );
  }

  return null;
};

const CustomLegend = ({ payload }) => {
  return (
    <div className="legend">
      <p className="legend-name">Activité quotidienne</p>
      <ul className="legend-list">
        <style>{`
          .kilogram::marker {
            color: ${payload[0].color};
          }
          .calorie::marker {
            color: ${payload[1].color};
          }
          
        `}</style>
        <li className="legend-list-name kilogram">Poids (kg)</li>
        <li className="legend-list-name calorie">Calories (Kcal)</li>
      </ul>
    </div>
  );
};
<Legend content={CustomLegend} />;

export default function ActivityChart({ data }) {
  const allDate = data.map((date) => {
    return date.getDate();
  });
  return (
    <div className="activity-chart">
    <ResponsiveContainer  height={320}  maxWidth={1500} minWidth={200} >
    <BarChart  data={data} barCategoryGap="40%">
      <CartesianGrid strokeDasharray="2" vertical={false} />
      <XAxis
      /*get number of the day */
        dataKey={() => {
          const allDate = data.map((date) => {
            return date.getDate();
          });
          const allDay = allDate.map((day) => {
            return day.getDate();
          });
          return allDay
        }}
      />
      <YAxis
        dataKey="kilogram"
        yAxisId="right"
        orientation="right"
        tickCount="4"
        domain={[`dataMin - 4`, `dataMax + 2`]}
      />
      <YAxis dataKey="calories" yAxisId="left" orientation="left" hide="true" />
      <Tooltip wrapperStyle={{outline:'0px'}} content={<TooltipContent />} />
      <Legend content={CustomLegend} verticalAlign="top" />
      <Bar
        dataKey="kilogram"
        yAxisId="right"
        fill={colors.fontDark}
        shape={<Rectangle radius={[50, 50, 0, 0]} />}
      />
      <Bar
        dataKey="calories"
        yAxisId="left"
        fill={colors.primary}
        shape={<Rectangle radius={[50, 50, 0, 0]} />}
      />
    </BarChart>
    </ResponsiveContainer>
    </div>
  );
}
ActivityChart.propTypes = {
  data : PropTypes.array
}