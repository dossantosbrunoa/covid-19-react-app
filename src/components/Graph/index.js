import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Navigator from "../Navigator";
import CircularProgress from "@material-ui/core/CircularProgress";
import GraphTooltip from "./GraphTooltip";

import { GraphAreaContainer } from "./styles";

import moment from 'moment';

const graphObject = {
  cases: {
    backgroundButtonColor: "#6a006a",
    linePosition: "start",
    label: "Casos",
  },
  deaths: {
    backgroundButtonColor: "#ff0000",
    linePosition: "flex-end",
    label: "Mortes",
  },
};

const Graph = () => {
  const [dataType, setDataType] = useState("cases");
  const { countryHistoryObject, loading } = useSelector((state) => state.covid);

  let graphArray = null;

  if(!!countryHistoryObject && !!countryHistoryObject[dataType]) {
    graphArray = Object.keys(countryHistoryObject[dataType]).map(key => ({
      x: moment(key, "M/D/YYYY").format("DD/MM/YYYY"),
      y: countryHistoryObject[dataType][key]
    }));
  };

  return (
    <>
      <Navigator
        onButtonClicked={(dataType) => setDataType(dataType)}
        dataType={dataType}
        navigatorObject={graphObject}
      />
      {loading ? (
        <GraphAreaContainer>
          <CircularProgress />
        </GraphAreaContainer>
      ) : graphArray?.length > 0 ? (
        <ResponsiveContainer width="100%" height={380}>
          <AreaChart
            data={graphArray}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" interval={"preserveStartEnd"} tickCount={2} />
            <YAxis />
            <Tooltip content={<GraphTooltip dataType={dataType}/>} />
            <ReferenceLine y={0} stroke="#000" />
            <Area
              isAnimationActive={false}
              dataKey="y"
              type="monotone"
              stroke={graphObject[dataType].backgroundButtonColor}
              fill={graphObject[dataType].backgroundButtonColor}
              fillOpacity={0.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <GraphAreaContainer>Dados não encontrados</GraphAreaContainer>
      )}
    </>
  );
};

export default Graph;
