import { useState } from 'react';

export const ConfirmSignUpForm = ({auth}) => {
  const [error, setError] = useState(null)
  const [ user, setUser ] = useState(null)
  
  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setUser(null)
    const {
      target: {
        username: {value: username},
        code: {value: code}
      }
    } = e;

    try {
      const { user } = await auth.confirmSignUp( 
        username,
        code,
      );
      console.log("User confirmed");
      setUser(user)
    } catch (error) {
        console.error(error)
        console.log('error confirming:', JSON.stringify(error));
        setError(error)
    }
  }

  return (<div className='hero p3 m-3'>
    <div className='container has-border p-3'>
    <h1 className='title m-5'>Confirm your account</h1>
    <form onSubmit={onSubmit} >
      <div className='m-3 is-flex is-justify-content-space-between'>
        <label htmlFor='username'>
          username &nbsp;
        </label>
        <input name='username' placeholder='username' type='text'/>
      </div>
      <div className='m-3 is-flex is-justify-content-space-between'>
        <label htmlFor='code'>
          code &nbsp;
        </label>
        <input name='code' placeholder='code' type='text'/>
      </div>
      <div><input type='submit' className='button is-info' /></div>
    </form>
    { error ? <h2 className='m-2 message-header'>{error.code}</h2> : null }
    { user ? <h2 className='m-2 message-header'>{"Signed up as " + user.username}</h2> : null}
    </div>
  </div>)
}  
