import axios from 'axios';

export default class TaskService {

     static async GetAllTasks():Promise<ITask[]> 
     { 
       let response =  await axios.get<ITask[]>("http://localhost:8089/api/ToDoList/GetTasks");  
       return response.data;
     }
     static async RemoveTask(taskId:number)
     {
       await axios.get(`http://localhost:8089/api/ToDoList/RemoveTask/${taskId}`);            

     }
     static async AddTask(task:ITask)
     {
         await axios.post(`http://localhost:8089/api/ToDoList/AddTask`,{task});
      

     }
     static async UpdateTask(task:ITask)
     {
         await axios.post(`http://localhost:8089/api/ToDoList/UpdateTask`,{task});
     }
    
   
 }