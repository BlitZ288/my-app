import React, { FC } from 'react'
import MyButtonSecondary from '../UI/button/MyButtonSecondary'
import editIamge from '../img/edit.svg';
import deleteImage from '../img/delete.svg';
import MyButtonImge from '../UI/button/MyButtonImge';

 const CategoryItem:FC<ICategory> = (categoryItem) => {
  return (
    <div className='continerItem'>
    <div className='itemTodo'>
        <div className='infoItem'>
            <div className='headerItem'>
                <label className='name'>{categoryItem.name}</label>
                
            </div>
            <div className='description'>
            {categoryItem.description}
            </div>
        </div>
        <div className='containerButton'>
           <MyButtonImge onClick={()=>{}}>
                <img src={editIamge} alt='edit'></img>
            </MyButtonImge>
            <MyButtonImge onClick={()=>categoryItem.remove(categoryItem.id)}>
                <img src={deleteImage} alt='edit'></img>
            </MyButtonImge>
                            
               
        </div>

    </div>
</div>
  )
}
export default  CategoryItem
