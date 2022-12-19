import React, {useState} from "react";
import './index.css'

function FormActivity(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSend = a => {
    const newActivity = {
      id: '222',
      text: 'Hola'
    }
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