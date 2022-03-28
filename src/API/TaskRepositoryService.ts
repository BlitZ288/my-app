import {  IDataContext } from '../Context/DataContext';
import TaskServiceApi from './TaskServiseApi';
import { IRepository } from './type/IRepository';

export default class TaskRepositoryService  implements IRepository<ITask>  {
    
    static Context: IDataContext;   

    constructor(context:IDataContext){
       
       TaskRepositoryService.Context = context;
    }

    GetAll():ITask[]
    {  
       const {tasks, setTasks} = TaskRepositoryService.Context;
       TaskServiceApi.GetAllTasks().then(
           (result) =>{
            setTasks([...tasks, ...result]);
            return result;
           
           });
           return [] 
    };
    Remove(idTask: number)
    {   
        const {tasks, setTasks} = TaskRepositoryService.Context;
        setTasks(tasks.filter(t=>t.id !== idTask));
        TaskServiceApi.RemoveTask(idTask);
    };
    Add(task:ITask){      
        const {tasks, setTasks} = TaskRepositoryService.Context;
        task.id = tasks[tasks.length-1].id + 1;        
        setTasks([...tasks, task]);
        TaskServiceApi.AddTask(task);
    };
    
    Update (updateTask: ITask) {     
        const {tasks, setTasks} = TaskRepositoryService.Context;
        const tempTasks = tasks.filter(t=>t.id !== updateTask.id)
        tempTasks.push(updateTask);
        setTasks(tempTasks);  
        TaskServiceApi.UpdateTask(updateTask); 
    };    
}