import { createContext } from "react";
import { IRepository } from "../API/type/IRepository";

 interface ServiceContext{
    TaskService:IRepository<ITask>;
    CategoryServise?:IRepository<ICategory>;
}
export const ServiceContext = createContext<ServiceContext>({} as ServiceContext);