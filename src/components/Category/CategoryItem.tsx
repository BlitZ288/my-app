import React, { FC, useState } from 'react'
import editIamge from '../img/edit.svg';
import deleteImage from '../img/delete.svg';
import MyButtonImge from '../UI/button/MyButtonImge';
import MyModel from '../UI/Model/MyModel';
import TaskFormDelete from '../Tasks/TaskFormDelete';
import CategoryForm from './CategoryForm';

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
                <MyButtonImge onClick={()=>setEditModal(true)}>
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
                removeById={categoryItem.remove}
                idDeleteObject={categoryItem.id}
                nameDeleteObject={categoryItem.name}  
                />
       </MyModel>
       <MyModel visible={editModal} setVisable={setEditModal} >
              <CategoryForm
              workingOnCategory={categoryItem.update}
              close={setEditModal}
              category={categoryItem}   
              titlePrimaryButton='Сохранить'
              titleForm='Редактирование категории'          
              
              />
        </MyModel>
</div>
  )
}
export default  CategoryItem
