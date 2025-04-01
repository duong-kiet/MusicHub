import IndexHome from './pages/Home/index';
import IndexArtist from './pages/Artists/index';
import { Routes, Route } from "react-router";
import SignIn from './pages/User/SignIn';
import SignUp from './pages/User/SignUp/SignUp';
import SignUp_Step1 from './pages/User/SignUp/SignUp_Step1';
import SignUp_Step2 from './pages/User/SignUp/SignUp_Step2';
import ForgotPassword from './pages/User/ForgotPassword';
import Dashboard from './pages/Dashboard/index';

function App() {
  return (
      <Routes>
        <Route index element={<IndexHome />} />
        <Route path='/artists' element={<IndexArtist />} />
        <Route path='/user/signin' element={<SignIn />} />
        <Route path='/user/signup' element={<SignUp />} />
        <Route path='/user/signup/step=1' element={<SignUp_Step1 />} />
        <Route path='/user/signup/step=2' element={<SignUp_Step2 />} />
        <Route path='/user/forgot-password' element={<ForgotPassword />} />

        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
  )
}

export default App