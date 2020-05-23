import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

function Chart({ data }) {
  const renderLineChart = (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="id" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="votes" stroke="#ff6500" />
      </LineChart>
    </ResponsiveContainer>
  );
  return renderLineChart;
}

export default Chart;
