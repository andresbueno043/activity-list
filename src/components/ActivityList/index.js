import React, { useState } from "react";
import { FormActivity } from "../Form";
import { Activity } from '../Activity'
import './index.css'

function ActivityList() {

  const [activities, setActivities] = useState([]);

  const addActivity = activity => {
    console.log('Activity added')
    console.log(activity)
  }

  return (
    <>
      <FormActivity/>
      <div className="activity-list-container">
        {
          activities.map((a) => 
            <Activity 
              text = {a.text}
              completed = {a.completed}
            />
          )
        }
      </div>
    </>
  );
}

export {ActivityList}