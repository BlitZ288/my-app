import axios from "axios";

export default class CategoryServise 
{

    static async GetAllCategores():Promise<ICategory[]>
    {
        let response = await axios.get<ICategory[]>("http://localhost:8089/api/ToDoList/GetCategories");   
        return response.data;
    }
    static async RemoveCategor(categoryId:number)
    {
        await axios.get(`http://localhost:8089/api/ToDoList/RemoveCategory/${categoryId}`); 
    }
    static async AddCategory(category:ICategory)
    {
        await axios.post(`http://localhost:8089/api/ToDoList/AddCategory`,{...category},{
            headers:{
              'Content-Type': 'application/json'
            }
        });  
    }
    static async UpdateCategory(category:ICategory)
    {
        await axios.post(`http://localhost:8089/api/ToDoList/UpdateCategory`,{...category});
    }
}

