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

  if (!activities.length) return <div className="card">No data yet</div>;
  return (
    <div className="card">
  <h2>📈 Mood Before vs After</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <CartesianGrid />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

           <Line type="monotone" dataKey="before" stroke="#ef9a9a" strokeWidth={2} dot={{ r: 4 }} name="Before" />
  		<Line type="monotone" dataKey="after"  stroke="#66bb6a" strokeWidth={2} dot={{ r: 4 }} name="After" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MoodChart;
