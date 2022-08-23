import { useState } from 'react';

export const SignIn = ({amplify, auth}) => {
  const [error, setError] = useState(null)
  const [ user, setUser ] = useState(null)
  const [ token, setToken ] = useState(null)
  
  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setUser(null)
    setToken(null)

    const {
      target: {
        username: {value: username},
        password: {value: password},
      }
    } = e;
    
    try {
      const user = await auth.signIn(username, password)
      const jwtToken = user.signInUserSession.accessToken.jwtToken

      console.log('TOKEN', jwtToken)
      
      await navigator.clipboard.writeText(jwtToken)
      setToken(jwtToken)
      setUser(user)
    } catch (error) {
        console.log('error signing in:', error);
        setError(error)
    }
  }

  return (
    <div className='hero p-3 m-3'>
      <div className='container has-border p-3'>
        <h2 className='title m-5'>Login</h2>
        <form onSubmit={onSubmit}>
          <div className='m-3 is-flex is-justify-content-space-between'>
            <label htmlFor='username'>Username &nbsp;</label>
            <input type='string' name='username' placeholder='username'/>
          </div>
          <div className='m-3 is-flex is-justify-content-space-between'>
            <label htmlFor='password'>Password &nbsp;</label>
            <input type='password' name='password' placeholder='password'/>
            </div>
          <div className='m-3 is-flex is-justify-content-space-between'><input type='submit' className='button is-info' /> </div>
        </form>
          {error ? <h2 className='message-header is-warning m-2'>{!!error && error.code}</h2> : null}
          {user ? <h2 className='message-header is-success m-2'>{!!user && "Logged in as " + user.username}</h2> : null}
          {token ? <h2 className='message-header is-success m-2'>{!!token && "Token copied to clipboard!"}</h2> : null}
      </div>
    </div>
  )
}
