import React, { FC, useContext } from 'react'
import NTaskRepositoryService from '../API/NTaskRepositoryService'
import { DataContext } from './DataContext';
import { ServiceContext } from './ServiceContext'

const ServiceContextProvider :FC = ({children}) => {
    
    const dataContext = useContext(DataContext);
    const taskService = new NTaskRepositoryService(dataContext);
    
    return (
    <ServiceContext.Provider value={{TaskService: taskService}}>   
     <div>
        {children}
     </div>
     </ServiceContext.Provider> 
    )
}
 

export default ServiceContextProvider