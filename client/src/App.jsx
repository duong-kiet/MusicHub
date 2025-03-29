import IndexHome from './pages/Home/index';
import IndexArtist from './pages/Artists/index';
import { Routes, Route } from "react-router";
import SignIn from './pages/User/SignIn';
import SignUp from './pages/User/SignUp';
import ForgotPassword from './pages/User/ForgotPassword';

function App() {
  return (
      <Routes>
        <Route index element={<IndexHome />} />
        <Route path='/artists' element={<IndexArtist />} />
        <Route path='/user/signin' element={<SignIn />} />
        <Route path='/user/signup' element={<SignUp />} />
        <Route path='/user/forgot-password' element={<ForgotPassword />} />
      </Routes>
  )
}

export default App