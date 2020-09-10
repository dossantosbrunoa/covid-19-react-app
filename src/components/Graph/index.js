import React from 'react';
import { useSelector } from 'react-redux';
import {
  ResponsiveContainer, AreaChart, Area, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

import GraphTooltip from './GraphTooltip';

const Graph = () => {
  const { countryHistoryList, loading } = useSelector((state) => state.covid);

    return (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart  
            data={countryHistoryList}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip content={<GraphTooltip />}/>
            <ReferenceLine y={0} stroke="#000" />
            <Area dataKey="Confirmed" type="monotone" stroke="#6a006a" fill="#6a006a" fillOpacity={0.5}/>
            {/* <Bar dataKey="Deaths" fill="#ff0000" />
            <Bar dataKey="Recovered" fill="#008000" /> */}
          </AreaChart>
        </ResponsiveContainer>
    );
}

export default Graph;