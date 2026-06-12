import { useState } from "react";

import ActivityForm from "./components/ActivityForm";
import ActivityTable from "./components/ActivityTable";

function App() {

  const [activities, setActivities] = useState([]);

  return (
    <div>

      <h1>
        Movement Quest
      </h1>

      <ActivityForm
        activities={activities}
        setActivities={setActivities}
      />

      <ActivityTable
        activities={activities}
        setActivities={setActivities}
      />

    </div>
  );
}

export default App;
