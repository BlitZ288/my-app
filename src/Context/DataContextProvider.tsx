import React, { FC, useState } from 'react'
import { DataContext } from './DataContext'

const DataContextProvider :FC = ({children}) => {
  const [tasks , setTasks] = useState<ITask[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  return (
    <DataContext.Provider value={{
        categories:categories,
        tasks:tasks,
        setTasks:setTasks,
        setCategories:setCategories
        }} > 
        <div>{children}</div>
    </DataContext.Provider>
  )
}

export default DataContextProvider