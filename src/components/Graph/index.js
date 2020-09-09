import React from 'react';
import { useSelector } from 'react-redux';
import {
  BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Graph = () => {
  const { countryHistoryList, loading } = useSelector((state) => state.covid);
  
  console.log(countryHistoryList)
    return (
        <BarChart 
          width={500}
          height={400}
          data={countryHistoryList}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="Date" height={30} stroke="#8884d8" />
          <Bar dataKey="Confirmed" fill="#6a006a" />
          <Bar dataKey="Deaths" fill="#ff0000" />
          <Bar dataKey="Recovered" fill="#008000" />
        </BarChart>
    );
}

export default Graph;