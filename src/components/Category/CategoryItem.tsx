import React, { FC, useState } from 'react'
import editIamge from '../img/edit.svg';
import deleteImage from '../img/delete.svg';
import MyButtonImge from '../UI/button/MyButtonImge';
import MyModel from '../UI/Model/MyModel';
import TaskFormDelete from '../Tasks/TaskFormDelete';

 const CategoryItem:FC<ICategory> = (categoryItem) => {
    const [deleteModal, setDeleteModal] = useState(false); 
    const [editModal, setEditModal] = useState(false); 
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
                <MyButtonImge onClick={()=>setDeleteModal(true)}>
                    <img src={deleteImage} alt='edit'></img>
                </MyButtonImge>                            
                
            </div>
            
        
        </div>
        <MyModel visible={deleteModal} setVisable={setDeleteModal} >
                <TaskFormDelete 
                 deleteObject='категорию'
                close={setDeleteModal}
                removeTask={()=>categoryItem.remove(categoryItem.id)}
                nameDeleteObject={categoryItem.name}  
                />

               
            </MyModel>
</div>
  )
}
export default  CategoryItem
