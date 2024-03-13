import React, { useState } from 'react'
import axios from 'axios';

const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const payload = {
      username, email, password
    }
    try {
      const response = await axios.post("https://notes-app-backend-uxc3.onrender.com/users/register", payload);
      console.log(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username...' value={username} onChange={e => setusername(e.target.value)} />
        <input type="email" placeholder='email...' value={email} onChange={e => setemail(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={e => setpassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Signup
