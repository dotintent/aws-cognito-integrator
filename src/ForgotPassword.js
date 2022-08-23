import { useState } from 'react';

export const ForgotPasswordForm = ({auth}) => {
  const [error, setError] = useState(null)
  const [ response, setResponse ] = useState(null)

  const onSubmit = async (e) => {
    setError(null)
    setResponse(null)
    e.preventDefault()

    try {
      const { target: { username: { value: username } }} = e
      const response = await auth.forgotPassword(username)
      setResponse(JSON.stringify(response))
      console.log({response})
    } catch(error){
      console.error(error)
      setError(JSON.stringify(error))
    }
  }

  return (
    <div className='hero p3 m-3'>
     <div className='container has-border p-3'>
      <h2 className='title m-5'>Send reset password code</h2>
     <form onSubmit={onSubmit}>
        <label className='m-1'>username</label>
        <input className='m-1' type='string' placeholder='username' name='username' />
        <input className='m-1' type='submit' />
      </form>
      {!!error && <p className='m-2 message-header'>Error: {error}</p>}
      {!!response && <p className='m-2 message-header'>Reset code sent to your email</p>}
     </div>

    </div>
  )
}
