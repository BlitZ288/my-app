import React, { useContext, useEffect, useState } from 'react'
import CategoryServise from '../../API/CategoryServise';
import { ListContext } from '../../Context';
import CategoryList from './CategoryList';

 const Category = () => {

  const {categories , setCategories} = useContext(ListContext)
  const {isLoadingCategories} = useContext(ListContext);

  const removeCategory = (idCategory :number)=>{
    setCategories(categories.filter(c=>c.id !== idCategory));
    CategoryServise.RemoveCategor(idCategory);
  }
  
  return (
    <div  className="App">        
      {
        isLoadingCategories
        ?<h1>Идет загрузка</h1>
        :<CategoryList removeCategory={removeCategory}  items={categories} ></CategoryList>     
      
      }

    </div>
  );
}
export default Category
