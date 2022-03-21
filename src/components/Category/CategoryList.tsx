import React, { FC, useContext } from 'react'
import { ListContext } from '../../Context';
import CategoryItem from './CategoryItem';

 const CategoryList:FC<{categories:Array<ICategory>}> = ({categories}) => {
  const {removeCategory, updateCategory} = useContext(ListContext);
 
  return (
    <div>
     {
         categories.map((category)=>
            <CategoryItem
            key={category.id}
              id={category.id}
              name={category.name}
              description={category.description}
              remove={removeCategory}
              update= {updateCategory}
            />

          
         )
     }
    </div>
  )
}
export default CategoryList;