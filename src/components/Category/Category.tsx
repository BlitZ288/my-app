import React, { useContext } from 'react'
import { ListContext } from '../../Context';
import CategoryList from './CategoryList';

 const Category = () => {

  const {categories } = useContext(ListContext)
  return (
    <div  className="App">        
      {
       <CategoryList categories={categories}></CategoryList> 
      }

    </div>
  );
}
export default Category