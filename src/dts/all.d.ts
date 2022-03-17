interface IMyButtonSecondary{
    onClick? : React.MouseEventHandler<HTMLButtonElement>;
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
interface IMyInput extends React.HTMLProps<Input>{
    labelInput:string;
}

interface ICreateForm{
    createTask?:(newTask: ITask) => void;
    createCategory?:(newCategoryt: ICategory) => void;
    lastId:number;
    close:React.Dispatch<React.SetStateAction<boolean>>;
}
interface IEditeFrom{
    task:ITask;
    editTask:(task:ITask)=>void;
    close:React.Dispatch<React.SetStateAction<boolean>>;
}
interface IDeleteForm{
    nameDeleteObject:string;
    deleteObject:string;
    removeTask?:(idTask: number) => void;
    removeCategory?:(idCategory: number) => void;    
    close:React.Dispatch<React.SetStateAction<boolean>>;
}


interface IMyForm extends React.HTMLProps<Form>{
    titleForm:string;
    children: React.ReactNode;
    titlePrimaryButton:string;
    titleSecondaryButton:string;
    move:(DOMAttributes<Form>);
    close:React.Dispatch<React.SetStateAction<boolean>>;
}
interface IMySelect extends React.HTMLProps<Select> {
    optionsTasks?: Array<ITask>;
    optionsCategories?: Array<ICategory>;
    defaultValue: string;
    labelSelect:string;
    onChange:(idCategory:number)=>void;
    
}




interface ICategoryList{
    items:Array<ICategory>;
    removeCategory: (idCategory:number)=>void;
}


interface ITaskList{   
    items:Array<ITask>;    
    removeTask  : (idTask : number)=>void;
    updateTask :(updateTask:ITask)=>void;
}
interface ITask{
    id:number;
    name:string;
    description:string;
    categoryId?:number;
    categoryName:string;
    remove :(idTask:number)=>void;
    update :(updateTask:ITask)=>void;
}
interface ICategory{
    id:number;
    name:string;
    description:string;
    remove :(idCategory:number)=>void;

}
interface INavLink {
    pathname:string;
}








declare module "*.module.css";
declare module "*.svg"
declare module "*.png"
