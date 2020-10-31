// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import { useRef } from "react";
import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = useRef(null);
  const [username, setUsername] = React.useState('');

  const handleChange = (e) => {
    setUsername(e.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = inputRef.current.value;
    onSubmitUsername(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" ref={inputRef} onChange={handleChange} value={username}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App