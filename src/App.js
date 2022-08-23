import {Amplify, Auth} from 'aws-amplify';
import awsConfig from './aws-exports';
import './App.css';
import { Route, HashRouter, Routes } from 'react-router-dom'
import { SignUpForm } from './SignUp'
import { ConfirmSignUpForm } from './ConfirmSignUp'
import { SignIn } from './SignIn'
import { ForgotPasswordForm } from './ForgotPassword'
import { PasswordResetForm } from './PasswordReset'
import { Homepage } from './Homepage'
import { Header } from './Header'

Amplify.configure(awsConfig);

function App() {
  return (
    <div className="main has-border has-text-link has-border p-5 m-2">
      <HashRouter>
        <Header/>
        <div className='m-5'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<SignUpForm auth={Auth}/>} />
          <Route path='/confirm-signup' element={<ConfirmSignUpForm auth={Auth}/>} />
          <Route path='/signin' element={<SignIn auth={Auth}/>} />
          <Route path='/forgot-password' element={<ForgotPasswordForm auth={Auth}/>} />
          <Route path='/reset-password' element={<PasswordResetForm auth={Auth}/>} />
        </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App