import React, { useContext, useEffect, useState } from 'react'
import CategoryServise from '../../API/CategoryServise';
import { ListContext } from '../../Context';
import CategoryList from './CategoryList';

 const Category = () => {

  const {categories , setCategories} = useContext(ListContext)
  const [isLoadingData, setIsLoading] = useState(true);

  const removeCategory = (idCategory :number)=>{
    setCategories(categories.filter(c=>c.id !== idCategory));
    CategoryServise.RemoveCategor(idCategory);
  }
  async function GetCategories() {
    const categories = await CategoryServise.GetAllCategores();
    setCategories(categories);
    
  }
  useEffect(()=>{
    setIsLoading(true);
    GetCategories();
    setIsLoading(false);
  },[]);

  return (
    <div  className="App">        
      {
        isLoadingData
        ?<h1>Идет загрузка</h1>
        :<CategoryList removeCategory={removeCategory}  items={categories} ></CategoryList>     
      
      }

    </div>
  );
}
export default Category
