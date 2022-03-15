import React, { FC } from 'react'
import CategoryItem from './CategoryItem';

 const CategoryList:FC<ICategoryList> = (categories) => {
  return (
    <div>
     {
         categories.items.map((category)=>
            <CategoryItem  key={category.id} id={category.id} name={category.name} description={category.description} remove={categories.removeCategory}></CategoryItem>
         )
     }
    </div>
  )
}
export default CategoryList;