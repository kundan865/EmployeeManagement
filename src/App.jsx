import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Employees from './component/Employees'
import EmployeePopup from './component/EmployeePopup'
import DeletePopup from './component/DeletePopup'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployees } from './redux/reducer/employee/employeeThunk'
import HighlightEmployees from './component/HighlihtEmployees'
function App() {

  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(getEmployees())
  },[])

  const highlightPopup=useSelector(state=>state.popup.highlightPopup);

  return (
    <div className='min-h-screen w-full flex flex-col '>
      <EmployeePopup/>
      <DeletePopup/>
      <Navbar />
      <div className='flex-1'>
        {highlightPopup ?<HighlightEmployees/>:<Employees />}
        
        
      </div>
      <Footer />
    </div>
  )
}

export default App
