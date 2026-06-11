import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
}
from "recharts";

function MoodChart({
  activities
}) {

  return (

    <LineChart
      width={700}
      height={300}
      data={activities}
    >

      <CartesianGrid />

      <XAxis
        dataKey="date"
      />

      <YAxis />

      <Tooltip />

      <Line
        dataKey="mood_before"
      />

      <Line
        dataKey="mood_after"
      />

    </LineChart>
  );
}
