import { useContext } from "react"
import { ServiceContext } from "../Context/ServiceContext"

export const useServiseContext = () =>
{
    const {CategoryServise,TaskService} = useContext(ServiceContext);
    return {CategoryServise, TaskService};
}