import { createContext, Dispatch, SetStateAction } from "react";

interface IListContext 
{   
    tasks: Array<ITask>;
    setTasks: Dispatch<SetStateAction<ITask[]>>; 
    categories: Array<ICategory>;
    setCategories: Dispatch<SetStateAction<ICategory[]>>;   
}


export const ListContext  = createContext<IListContext>({} as IListContext);
//export const CategoryContext  = createContext<ICategoryContext>({} as ICategoryContext);
