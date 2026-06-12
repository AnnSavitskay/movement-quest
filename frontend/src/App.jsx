import { useState } from "react";
import "./App.css";

import ActivityForm from "./components/ActivityForm";
import ActivityTable from "./components/ActivityTable";

function App() {

  const [activities, setActivities] = useState([]);

  return (
  <div className="app-container">
    <h1>Movement Quest</h1>
    <p className="subtitle">Track your movement, feel the difference 🌸</p>
    <ActivityForm activities={activities} setActivities={setActivities} />
    <ActivityTable activities={activities} setActivities={setActivities} />
  </div>
);
}

export default App;
