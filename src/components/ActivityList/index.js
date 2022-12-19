import React, { useState } from "react";
import { FormActivity } from "../Form";
import { Activity } from '../Activity'
import './index.css'

function ActivityList() {

  const [activities, setActivities] = useState([]);

  const addActivity = activity => {
    if (activity.text.trim()){
      activity.text = activity.text.trim();
      const updatedActivities = [activity, ...activities];
      setActivities(updatedActivities);
    } else {
      alert('You can not add an empty activity!')
    }
  }

  const deleteActivity = id => {
    const updatedActivities = activities.filter(activity => activity.id !== id);
    setActivities(updatedActivities);
  }

  const completeActivity = id => {
    const updatedActivities = activities.map(activity => {
      if (activity.id === id ) {
        activity.completed = !activity.completed;
      }

      return activity
    });
    setActivities(updatedActivities);
  }

  return (
    <>
      <FormActivity onSubmit={addActivity} />
      <div className="activity-list-container">
        {
          activities.map((a) => 
            <Activity 
              id = {a.id}
              key = {a.id}
              text = {a.text}
              completed = {a.completed}
              deleteActivity = {deleteActivity}
              completeActivity = {completeActivity}
            />
          )
        }
      </div>
    </>
  );
}

export {ActivityList}