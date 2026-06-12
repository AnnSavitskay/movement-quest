function DashboardCards({ activities }) {

  const totalActivities =
    activities.length;

  const avgMoodGain =
    activities.length > 0
      ? (
          activities.reduce(
            (sum, a) =>
              sum +
              (a.mood_after - a.mood_before),
            0
          ) / activities.length
        ).toFixed(1)
      : 0;
  
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px"
      }}
    >
      <StatCard
        title="Activities"
        value={totalActivities}
      />

      <StatCard
        title="Mood Gain"
        value={`+${avgMoodGain}`}
      />
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.1)",
        width: "180px"
      }}
    >
      <h4>{title}</h4>

      <h2>{value}</h2>
    </div>
  );
}

export default DashboardCards;
