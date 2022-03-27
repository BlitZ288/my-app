import { createContext } from "react";
import { IRepository } from "../API/type/IRepository";

export interface ITaskContext {

    tasks: ITask[];
    TaskService: IRepository<ITask>;
    isloading: boolean;
    setTasks:React.Dispatch<React.SetStateAction<ITask[]>>

}




export const TaskContext = createContext<ITaskContext>({} as ITaskContext);