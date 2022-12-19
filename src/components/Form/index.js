import React, {useState} from "react";
import './index.css'
import {v4 as uuidv4} from 'uuid'

function FormActivity(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSend = a => {
    a.preventDefault();

    const newActivity = {
      id: uuidv4(),
      text: input,
      completed: false
    };

    props.onSubmit(newActivity)
  }

  return (
    <form className="activity-form"
      onSubmit={handleSend}
    >
      <input
        className="activity-input"
        type='text'
        placeholder="Write an activity!"
        name='text'
        onChange={handleChange}
      />
      <button className="activity-button">
        Add activity
      </button>
    </form>
  )
}

export {FormActivity}