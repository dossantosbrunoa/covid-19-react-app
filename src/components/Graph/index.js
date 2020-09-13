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

const graphObject = {
  cases: {
    backgroundButtonColor: "#6a006a",
    linePosition: "start",
    label: "Casos",
  },
  deaths: {
    backgroundButtonColor: "#ff0000",
    linePosition: "center",
    label: "Mortes",
  },
  recovered: {
    backgroundButtonColor: "#008000",
    linePosition: "flex-end",
    label: "Recuperados",
  },
};

const Graph = () => {
  const [dataType, setDataType] = useState("cases");
  const { countryHistoryList, loading } = useSelector((state) => state.covid);

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
      ) : countryHistoryList.length > 0 ? (
        <ResponsiveContainer width="100%" height={380}>
          <AreaChart
            data={countryHistoryList}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" interval={"preserveStartEnd"} tickCount={2} />
            <YAxis />
            <Tooltip content={<GraphTooltip />} />
            <ReferenceLine y={0} stroke="#000" />
            <Area
              isAnimationActive={false}
              onAnimationStart={() => console.log("onAnimationStart")}
              onAnimationEnd={() => console.log("onAnimationEnd")}
              dataKey={dataType}
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
