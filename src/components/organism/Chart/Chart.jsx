import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

function Chart({ data }) {
  const renderLineChart = (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="id" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />

      <Line type="monotone" dataKey="votes" stroke="#ff6500" />
    </LineChart>
  );
  return renderLineChart;
}

export default Chart;
