import  { FC, useContext } from 'react'
import CategoryServise from '../API/CategoryServise';
import TaskRepositoryService from '../API/TaskRepositoryService'
import { DataContext } from './DataContext';
import { ServiceContext } from './ServiceContext'

const ServiceContextProvider :FC = ({children}) => {
    
    const dataContext = useContext(DataContext);
    const taskService = new TaskRepositoryService(dataContext);
    const categoryServise = new CategoryServise(dataContext);
    return (
    <ServiceContext.Provider value={{TaskService: taskService , CategoryServise : categoryServise}}>   
     <div>
        {children}
     </div>
     </ServiceContext.Provider> 
    )
}
 

export default ServiceContextProvider