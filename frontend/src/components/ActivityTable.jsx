import { useEffect,
         useState }
from "react";

import axios
from "axios";

function ActivityTable({
  activities,
  setActivities
}) {

  useEffect(() => {

    loadActivities();

  }, []);

  async function loadActivities() {

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
    <h2>📋 Activity Log</h2>
    <div className="table-wrapper">
      <table>

      <thead>

        <tr>

          <th>
            Activity
          </th>

          <th>
            Minutes
          </th>

          <th>
            Mood Before
          </th>

          <th>
            Mood After
          </th>

        </tr>

      </thead>

     <tbody>
  {Array.isArray(activities) && activities.map(activity => (
    <tr key={activity.id}>

                <td>
                  {activity.activity}
                </td>

                <td>
                  {activity.duration}
                </td>

                <td>
                  {activity.mood_before}
                </td>

                <td>
                  {activity.mood_after}
                </td>

              </tr>
            )
          )
        }

      </tbody>
    </table>
    </div>
      </div>
  );
}

export default ActivityTable;
