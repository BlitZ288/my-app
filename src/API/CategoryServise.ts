import { IDataContext } from "../Context/DataContext";
import CategoryServiseApi from "./CategoryServiseApi";
import { IRepository } from "./type/IRepository";

export default class CategoryServise implements IRepository<ICategory>  {
    
    static Context: IDataContext;

    constructor (context:IDataContext){
        CategoryServise.Context = context;
    }   
    GetAll(): ICategory[]{

        const {categories, setCategories}  = CategoryServise.Context;
        CategoryServiseApi.GetAllCategores().then(
            (result) => {
                setCategories([...categories, ...result]);
                return result;
            });
        return [];    
    };
    Remove(idCategory: number){
        const {categories, setCategories}  = CategoryServise.Context;
        setCategories(categories.filter(c=>c.id !== idCategory));
        CategoryServiseApi.RemoveCategor(idCategory);
    };
    Add(category:ICategory){
        const {categories, setCategories}  = CategoryServise.Context;
        setCategories([...categories, category]);
        CategoryServiseApi.AddCategory(category);
    };
    Update(updateCategory: ICategory) {
        const {categories, setCategories}  = CategoryServise.Context;
        const tempCategories = categories.filter(c=>c.id !== updateCategory.id);
        tempCategories.push(updateCategory);
        setCategories(tempCategories);
        CategoryServiseApi.UpdateCategory(updateCategory);
    };
}