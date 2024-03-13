import React, { useState } from 'react'

const Login = () => {

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpassword] = useState("");

  const handleSubmit = () => {
    const payload = {
      username, email, pass
    }
    console.log(payload);
  }

  return (
    <div>
      <form>
        <input type="text" placeholder='username...' value={username} onChange={e => setusername(e.target.value)} />
        <input type="email" placeholder='email...' value={email} onChange={e => setemail(e.target.value)} />
        <input type="password" placeholder='password' value={pass} onChange={e => setpassword(e.target.value)} />
        <button onChange={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Login
