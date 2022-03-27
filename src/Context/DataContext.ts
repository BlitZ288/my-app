import { createContext, Dispatch, SetStateAction } from "react";

export interface IDataContext{
    tasks:ITask[];
    setTasks:Dispatch<SetStateAction<ITask[]>>;
    categories:ICategory[];
    setCategories:Dispatch<SetStateAction<ICategory[]>>;
}
export const DataContext = createContext<IDataContext>({} as IDataContext);