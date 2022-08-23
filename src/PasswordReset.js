import { useState } from 'react';

export const PasswordResetForm = ({auth}) => {
  const [error, setError] = useState(null)
  const [ response, setResponse ] = useState(null)
  
  const onSubmit = async (e) => {
    setError(null)
    setResponse(null)
    e.preventDefault()
    try {
      const { target: { username: { value: username }, code: { value: code },  password: { value: password } }} = e
      const response = await auth.forgotPasswordSubmit(username, code, password)
      console.log(response)
      setResponse(JSON.stringify(response))
    } catch(error){
      console.error(error)
      setError(error.toString())
    }
  }

  return (<div className='hero p3 m-3'>
    <div className='container has-border p-3'>
    <h2 className='title m-5'>Reset your password</h2>
    <form onSubmit={onSubmit} >
      <div className='m-3 is-flex is-justify-content-space-between'>
        <label className='m-1'>Username</label>
        <input type='text' placeholder='username' name='username' />
      </div>
      <div className='m-3 is-flex is-justify-content-space-between'>
        <label className='m-1'>New password</label>
        <input type='password' placeholder='password' name='password' />
      </div>
      <div className='m-3 is-flex is-justify-content-space-between'>
        <label className='m-1'>Code</label>
        <input type='string' placeholder='code' name='code' />
      </div>
      <div className='m-3 is-flex is-justify-content-space-between'>
        <input type='submit' />
      </div>
    </form>
    {!!error && <p className='m-2 message-header'>Error: {error}</p>}
    {!!response && <p className='m-2 message-header'>Password changed</p>}
    </div>
  </div>)
}