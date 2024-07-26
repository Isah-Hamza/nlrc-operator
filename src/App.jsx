import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from '../src/pages/Landing';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';
import Admin from './pages/Admin'
import Transaction from './pages/Admin/Transaction';
import Operator from './pages/Admin/Operator';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
  // <Landing />
  <BrowserRouter>
    <Routes>
      <Route path='/' Component={Login} />
      {/* <Route path='/' Component={Dashboard}  /> */}
      <Route path='/' Component={AdminLayout} >
        <Route path='/dashboard' Component={Dashboard} /> 
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
