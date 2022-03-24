import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import NTaskRepositoryService from '../API/NTaskRepositoryService';
import { TaskContext } from '../Context/TaskContext';
import Category from './Category/Category';
import Task from './Tasks/Task';

 const AppRouter = () => {
  return (
      <Routes>         
        <Route path='/Tasks' element={<Task />}> </Route>
        <Route path='/Category' element={<Category />}> </Route>
        <Route path="*" element={<Task />}/>
      </Routes>
  )
}
export default AppRouter;
