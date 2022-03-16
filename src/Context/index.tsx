import { createContext, Dispatch, SetStateAction } from "react";

interface IListContext 
{   
    tasks: Array<ITask>;
    setTasks: Dispatch<SetStateAction<ITask[]>>; 
    isLoadingTask : boolean;
    setIsLoadingTask:Dispatch<SetStateAction<boolean>>;
    categories: Array<ICategory>;
    setCategories: Dispatch<SetStateAction<ICategory[]>>;  
    isLoadingCategories:boolean; 
    setisLoadingCategories:Dispatch<SetStateAction<boolean>>
}


export const ListContext  = createContext<IListContext>({} as IListContext);
//export const CategoryContext  = createContext<ICategoryContext>({} as ICategoryContext);
