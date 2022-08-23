import { Link } from 'react-router-dom'

export const Homepage = () => (
  <div className='hero p-3'>
    <div className='container has-border p-3'>
    <h1 className='title m-5'>Homepage</h1>
      <Link className='navbar-item has-text-link has-border m-2' to='/'>Homepage</Link>
      <Link className='navbar-item has-text-link has-border m-2' to='/signup'>Sign Up</Link>
      <Link className='navbar-item has-text-link has-border m-2' to='/confirm-signup'>Confirm Sign Up</Link>
      <Link className='navbar-item has-text-link has-border m-2' to='/signin'>Sign in</Link>
      <Link className='navbar-item has-text-link has-border m-2' to='/forgot-password'>Forgot Password</Link>
      <Link className='navbar-item has-text-link has-border m-2' to='/reset-password'>Reset Password</Link>
    </div>
  </div>)
  