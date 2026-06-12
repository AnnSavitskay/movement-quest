import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
}
from "recharts";

function MoodChart({ activities }) {

  const data =
    activities.map((a, index) => ({
      day: index + 1,
      before: a.mood_before,
      after: a.mood_after
    }));

  if (!activities.length) return <div style={{background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.1)"}}>No data yet</div>;
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h3>Mood Before vs After</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <CartesianGrid />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="before"
          />

          <Line
            type="monotone"
            dataKey="after"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MoodChart;
