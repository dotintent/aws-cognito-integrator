import { Link } from 'react-router-dom'

export const Header = () => (
  <nav className='header is-flex has-border'>
    <Link className='navbar-item has-text-link has-border m-2' to='/'>Homepage</Link>
    <Link className='navbar-item has-text-link has-border m-2' to='/signup'>Sign Up</Link>
    <Link className='navbar-item has-text-link has-border m-2' to='/confirm-signup'>Confirm Sign Up</Link>
    <Link className='navbar-item has-text-link has-border m-2' to='/signin'>Sign in</Link>
    <Link className='navbar-item has-text-link has-border m-2' to='/forgot-password'>Forgot Password</Link>
    <Link className='navbar-item has-text-link has-border m-2' to='/reset-password'>Reset Password</Link>
  </nav>
)
