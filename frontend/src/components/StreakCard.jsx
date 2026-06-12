function StreakCard({ activities }) {
  function calcStreak(activities) {
    if (!activities.length) return 0;

    const days = [...new Set(activities.map(a => a.date))].sort().reverse();
    let streak = 1;
    for (let i = 0; i < days.length - 1; i++) {
      const curr = new Date(days[i]);
      const prev = new Date(days[i + 1]);
      const diff = (curr - prev) / (1000 * 60 * 60 * 24);
      if (diff === 1) streak++;
      else break;
    }
    return streak;
  }

  return (
    <div style={{ background: "#fff7e6", padding: "20px", borderRadius: "12px" }}>
      <h3>🔥 Current Streak</h3>
      <h2>{calcStreak(activities)} days</h2>
    </div>
  );
}

export default StreakCard;
