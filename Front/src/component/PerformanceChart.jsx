import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import "../style/componentStyles.css"
import PropTypes from 'prop-types' 



export default function PerformanceChart({data}){
const performance = data.performance;
return (
  <div className='performance-chart'>
    <ResponsiveContainer width="100%" height="100%" >
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={performance}>
        <PolarGrid stroke='#fff'  radialLines={false} />
        <PolarAngleAxis tick={{fill: "white", fontSize:"12px", fontFamily: 'Roboto' }}  dataKey="kind" />
        <Radar  dataKey="value" stroke="none" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
    </div>
  );
}

PerformanceChart.propTypes= {
  performance : PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.oneOf(['cardio', 'energy', 'endurance', 'strength', 'speed', 'intensity']).isRequired,
    }).isRequired,
  )
 
}