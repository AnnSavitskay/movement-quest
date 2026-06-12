import { useState }
from "react";
import axios from "axios";

import DashboardCards
from "./DashboardCards";

import MoodChart
from "./MoodChart";

import ChallengeCard
from "./ChallengeCard";

import StreakCard
from "./StreakCard";

function ActivityForm({
  activities,
  setActivities
}) {
  const [activity, setActivity] = useState("walking");  
  const [duration,
    setDuration] =
      useState(15);

  const [moodBefore,
    setMoodBefore] =
      useState(5);

  const [moodAfter,
    setMoodAfter] =
      useState(5);
      
  async function saveActivities() {

  await axios.post(
    "http://127.0.0.1:5000/activities",
    {
      activity,
      duration,

      mood_before:
        moodBefore,

      mood_after:
        moodAfter
    }
  );

  alert(
    "Activity saved!"
  );
	  const response =
	  await axios.get(
	    "http://127.0.0.1:5000/activities"
	  );

	setActivities(
	  response.data
	);
}

  return (
  <div className="card">
    <h2>🌿 Log Activity</h2>
    <div className="form-group">
      <label>Activity type</label>
      <select value={activity} onChange={(e) => setActivity(e.target.value)}>
        <option value="walking">🚶 Walking</option>
        <option value="cycling">🚴 Cycling</option>
        <option value="swimming">🏊 Swimming</option>
        <option value="stretching">🧘 Stretching</option>
      </select>
    </div>
    <div className="form-group">
      <label>Duration (minutes)</label>
      <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
    </div>
    <div className="form-group">
      <label>Mood before (1–10)</label>
      <input type="number" min="1" max="10" value={moodBefore} onChange={(e) => setMoodBefore(e.target.value)} />
    </div>
    <div className="form-group">
      <label>Mood after (1–10)</label>
      <input type="number" min="1" max="10" value={moodAfter} onChange={(e) => setMoodAfter(e.target.value)} />
    </div>
    <button className="save-btn" onClick={saveActivities}>Save Activity</button>
    <DashboardCards activities={activities} />
    <MoodChart activities={activities} />
    <StreakCard activities={activities} />
    <ChallengeCard />
  </div>
);
}

export default ActivityForm;
