
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route,Routes } from 'react-router-dom';

import Login from './Component/Login'
import Dashboard from './Component/Dashboard';
import Home from './Component/Home';
import Employees from './Component/Employees';
import Category from './Component/Category';

import Addcategory from './Component/Addcategory';
import Addemployees from './Component/Addemployees';
import Editemployees from './Component/Editemployees';
import Start from './Component/Start';
import Employlogin from './Component/Employlogin';
import EmployeeDetail from './Component/EmployeeDetail';


function App() {
  return (
    <BrowserRouter>
   <Routes>
   <Route path='/' element={<Start />}></Route> 
 <Route path='/adminlogin' element={<Login/>}></Route>
  <Route path='/employee_login' element={<Employlogin/>}> </Route> 
  <Route path='/employee_detail/:id' element={<EmployeeDetail />}></Route> 
  <Route path='/dashboard' element={<Dashboard/>}>
  <Route path='' element={<Home/>}></Route>
  <Route path='/dashboard/employee' element={<Employees/>}></Route>
        <Route path='/dashboard/category' element={<Category />}></Route>
        <Route path='/dashboard/add_category' element={<Addcategory />}></Route>
        <Route path='/dashboard/add_employee' element={<Addemployees/>}></Route>
        <Route path='/dashboard/edit_employee/:id' element={<Editemployees />}></Route>
        
 </Route> 
   </Routes>
   </BrowserRouter>
   
  )
}

export default App
