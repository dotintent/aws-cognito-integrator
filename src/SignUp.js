import { useState } from 'react';

export const SignUpForm = ({auth}) => {
  const [error, setError] = useState(null)
  const [ user, setUser ] = useState(null)
  
  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setUser(null)
    const {
      target: {
        username: {value: username},
        email: {value: email},
        password: {value: password}
      }
    } = e;

    try {
      const { user } = await auth.signUp({
        username,
        attributes: {email},
        password,
      });
      console.log("User created");
      setUser(user)
    } catch (error) {
        console.log('error signing up:', JSON.stringify(error));
        setError(error)
    }
  }

  return (<div className='hero p3 m-3'>
    <div className='container has-border p-3'>
    <h1 className='title m-5'>Create new user</h1>
    <form onSubmit={onSubmit} >
      <div className='m-3 is-flex is-justify-content-space-between'>
        <label htmlFor='username'>
          username &nbsp;
        </label>
        <input name='username' placeholder='username' type='text'/>
      </div>
      <div className='m-3 is-flex is-justify-content-space-between'>
        <label htmlFor='email'>
          email &nbsp;
        </label>
        <input name='email' placeholder='email' type='email'/>
      </div>
      <div className='m-3 is-flex is-justify-content-space-between'>
        <label htmlFor='password'>
          password &nbsp;
        </label>
        <input name='password' placeholder='password' type='password'/>
      </div>
      <div><input type='submit' className='button is-info' /></div>
    </form>
    { error ? <h2 className='m-2 message-header'>{error.code}</h2> : null }
    { user ? <h2 className='m-2 message-header'>{"Signed up as " + user.username}</h2> : null}
    { user ? <h2 className='m-2 message-header'>Verification code was sent to your email</h2> : null}
    </div>
  </div>)
}  
