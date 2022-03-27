import React, { useContext } from 'react';
import { DataContext, IDataContext } from '../Context/DataContext';
import {  ITaskContext, TaskContext } from '../Context/TaskContext';
import TaskService from './TaskServise';
import { IRepository } from './type/IRepository';

export default class NTaskRepositoryService  implements IRepository<ITask>  {
    
     Context: IDataContext;
   

    constructor(context:IDataContext){
       this.Context =context;
    }

    GetAll():ITask[]
    {  
        console.log(this.Context);    
       const {tasks, setTasks} = this.Context;
       TaskService.GetAllTasks().then(
           (result) =>{
            setTasks([...tasks, ...result]);
            return result;
           
           });
           return [] 
    };
    Remove(idTask: number)
    {
        TaskService.RemoveTask(idTask);
    };
    Add(task:ITask){
        const {tasks, setTasks} = this.Context;
        console.log(tasks);
        setTasks([...tasks, task]);
       // TaskService.AddTask(task);
    };
    Update (updateTask: ITask) {
     
        const {tasks, setTasks} = this.Context;
        const tempTasks = tasks.filter(t=>t.id !== updateTask.id)
        tempTasks.push(updateTask);
        setTasks(tempTasks);  
        TaskService.UpdateTask(updateTask); 
    };    
}