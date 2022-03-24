
interface IMyModel{
    children?: React.ReactNode;
    visible:boolean;
    setVisable:React.Dispatch<React.SetStateAction<boolean>>;

}
interface IMyInput extends React.HTMLProps<Input>{
    labelInput:string;
    errors?:Array<string>
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
    idDeleteObject: number;
    removeById:(idDeleteObject:number)=>void;     
    close:React.Dispatch<React.SetStateAction<boolean>>;
    
}


interface IMyForm extends React.HTMLProps<Form>{
    titleForm:string;
    children: React.ReactNode;
    titlePrimaryButton:string;
    titleSecondaryButton:string;
    move:(DOMAttributes<Form>);
    close:React.Dispatch<React.SetStateAction<boolean>>;
    valid:boolean;
}
interface IMySelect extends React.HTMLProps<Select> {
    optionsTasks?: Array<ITask>;
    optionsCategories?: Array<ICategory>;
    defaultValue: string;
    labelSelect:string;
    onChange:(idCategory:number)=>void;
    
    
}
interface ITaskForm{
    workingOnTask:(task:ITask)=>void;
    close:React.Dispatch<React.SetStateAction<boolean>>; 
    task?:ITask;
    lastId?:number;
    titlePrimaryButton:string;
    titleForm:string;
    categoryname:string;
}
interface ICategoryForm{
    workingOnCategory:(category:ICategory)=>void;
    close:React.Dispatch<React.SetStateAction<boolean>>; 
    category?:ICategory;
    lastId?:number;
    titlePrimaryButton:string;
    titleForm:string
}

interface ITask{
    id:number;
    name:string;
    description:string;
    categoryId:number;
    categoryName?:string;
    remove :(idTask:number)=>void;
    update :(updateTask:ITask)=>void;
}
interface ICategory{
    id:number;
    name:string;
    description:string;
    remove :(idCategory:number)=>void;
    update :(updateCategory:ICategory)=>void;

}
interface INavLink {
    pathname:string;
}

declare module "*.module.css";
declare module "*.svg"
declare module "*.png"
