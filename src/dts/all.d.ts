interface IMyButtonSecondary{
    onClick : React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
} 
interface IMyButtonPrimary{
    onClick? : React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
} 
interface IMyModel{
    children?: React.ReactNode;
    visible:boolean;
    setVisable:React.Dispatch<React.SetStateAction<boolean>>;

}
interface ITaskForm{
    create:(newPost: ITask) => void;
    lastId:number;
}

interface ITaskList{   
    items:Array<ITask>;    
    removeTask  : (idTask : number)=>void;
}
interface ITask{
    id:number;
    name:string;
    description:string;
    categoryId?:number;
    remove :(idTask:number)=>void;
}
interface ICategory{
    id:number;
    name:string;
    description:string;
}
interface INavLink {
    pathname:string;
}








declare module "*.module.css";
