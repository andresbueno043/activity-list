import React from "react";
import './index.css';
import { AiFillCloseCircle} from 'react-icons/ai'

function Activity({ id, text, completed, completeActivity, deleteActivity }) {
  return(
    <div className={completed ? 'activity-container completed' : 'activity-container'}>
      <div 
        className="activity-text"
        onClick={() => completeActivity(id)}  
      >
        {text}
      </div>
      <div 
        className="activity-icons-container"
        onClick={() => deleteActivity(id)}
      >
        <AiFillCloseCircle className="activity-icon"/>
      </div>
    </div>
  );
}

export {Activity}