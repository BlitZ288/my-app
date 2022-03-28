import React, { FC, useEffect, useState } from 'react'
import { useDataContext } from '../../Hooks/useDataContext';
import { useServiseContext } from '../../Hooks/useServiseContext';
import Loader from '../UI/loader/Loader';
import CategoryItem from './CategoryItem';

 const CategoryList:FC = () => {
  const {categories} = useDataContext();
  const {CategoryServise} = useServiseContext();
  const [loading ,setLoading] = useState(false);  
  
  useEffect(()=>{
    setLoading(true);
    CategoryServise.GetAll();  
    setLoading(false)
  },[])
  
  return (
    <div>
     {
       loading
        ?
       <Loader visible={loading}/>
        :          
       categories.map((category)=>
        <CategoryItem
          key={category.id}
          id={category.id}
          name={category.name}
          description={category.description}
          remove={CategoryServise.Remove}
          update= {CategoryServise.Update}
         />
        )
     }
    </div>
  )
}
export default CategoryList;