
export interface IRepository<T> {
    GetAll: ()=>T[];
    Remove:(idObject:number) =>void;
    Add:(object:T) =>void;
    Update:(object:T) =>void;
}