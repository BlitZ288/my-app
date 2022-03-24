import {  ITaskContext, TaskContext } from '../Context/TaskContext';
import TaskService from './TaskServise';
import { IRepository } from './type/IRepository';

export default class NTaskRepositoryService implements IRepository<ITask>  {
     Context: ITaskContext;
    
     constructor(context:ITaskContext){
        this.Context = context;
     }

    GetAll():ITask[]
    {
        
       TaskService.GetAllTasks().then(
           (reuslt) =>{
            return reuslt;
           });
           return [] 
    };
    Remove(idTask: number)
    {
        TaskService.RemoveTask(idTask);
    };
    Add(task:ITask){
        TaskService.AddTask(task);
    };
    Update (updateTask: ITask) {
        TaskService.UpdateTask(updateTask);
    };    
}