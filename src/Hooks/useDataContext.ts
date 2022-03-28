import { useContext } from "react"
import { DataContext } from "../Context/DataContext"


export const useDataContext = () =>{
    const {categories,tasks} = useContext (DataContext);
    return {categories, tasks};
}