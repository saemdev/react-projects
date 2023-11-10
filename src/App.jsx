import { useState } from 'react'

import './App.css'
import Cards from './components/Cards/Cards'
import Card from './components/Card/Card'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './Header/Header'


function App() {
  let [courseTitle,setCourseTitle]=useState([]);


  let handleAddToSidebar=title=>{
    setCourseTitle([...courseTitle,title]);
  }

  return (
    <div className='max-w-[82rem] mx-auto'>
      <Header></Header>
    <div className='md:flex gap-4'>
      <Cards handleAddToSidebar={handleAddToSidebar} ></Cards>
      <Sidebar courseTitle={courseTitle} ></Sidebar>

    </div>  
    </div>
  )
}

export default App
