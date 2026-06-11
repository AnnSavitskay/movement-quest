import { useState }
from "react";
import axios from "axios";

function ActivityForm() {

  const [activity,
    setActivity] =
      useState("walking");

  const [duration,
    setDuration] =
      useState(15);

  const [moodBefore,
    setMoodBefore] =
      useState(5);

  const [moodAfter,
    setMoodAfter] =
      useState(5);
      
  async function saveActivity() {

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
}

  return (

    <div>

      <h2>
        Log Activity
      </h2>

      <select
        value={activity}
        onChange={(e)=>
          setActivity(
            e.target.value
          )
        }
      >

        <option>
          walking
        </option>

        <option>
          cycling
        </option>

        <option>
          swimming
        </option>

        <option>
          stretching
        </option>

      </select>

      <br />

      <input
        type="number"
        value={duration}
        onChange={(e)=>
          setDuration(
            e.target.value
          )
        }
      />

      <br />

      <input
        type="number"
        min="1"
        max="10"
        value={moodBefore}
        onChange={(e)=>
          setMoodBefore(
            e.target.value
          )
        }
      />

      <br />

      <input
        type="number"
        min="1"
        max="10"
        value={moodAfter}
        onChange={(e)=>
          setMoodAfter(
            e.target.value
          )
        }
      />

      <br />

      <button
	  onClick={saveActivity}
	>
	  Save Activity
	</button>

    </div>

  );
}

export default ActivityForm;
