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

    createTask:(newTask : ITask)=>void;
    removeTask:(idTask : number)=>void;
    updateTask:(updateTask:ITask)=>void;

    createCategory:(newCategory : ICategory)=>void;
    removeCategory:(idCategory :number)=>void;
    updateCategory:(updateCategory:ICategory)=>void;

}


export const ListContext  = createContext<IListContext>({

    


} as IListContext);
