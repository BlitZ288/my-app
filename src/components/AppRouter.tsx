import React from 'react'
import { Route, Routes } from 'react-router-dom';
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
