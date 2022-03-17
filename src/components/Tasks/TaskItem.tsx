import React, { useContext, useEffect, useState } from 'react';
import MyButtonImge from '../UI/button/MyButtonImge';
import editIamge from '../img/edit.svg';
import deleteImage from '../img/delete.svg';
import iconFolder from '../img/folder.svg';
import MyModel from '../UI/Model/MyModel';
import TaskFormDelete from './TaskFormDelete';
import TaskFormEdit from './TaskFormEdit';
import { ListContext } from '../../Context';

const TaskItem = (TaskItem:ITask) => {  
    
    const [deleteModal, setDeleteModal] = useState(false); 
    const [editModal, setEditModal] = useState(false); 
    const {categories} = useContext(ListContext);
    const [taskItem , setTaskItem] = useState(TaskItem);

  function serchCategoryNamseById(idCategory?:number) :string
  {   
    let indexSerch = categories.findIndex(category=> (category.id === idCategory));       
    return categories[indexSerch].name;
  }
  
  useEffect(()=>{ 
      setTaskItem({...TaskItem , categoryName:serchCategoryNamseById(TaskItem.id)});
    
  },[]);
  

    return (
      <div>     
        <div className='continerItem'>
                <div className='itemTodo'>
                    <div className='infoItem'>
                        <div className='headerItem'>
                            <label className='name'>{taskItem.name}</label>
                            <div className='additionalInfo'>                                
                                <img className='additionalInfo__img' alt='folder' src={iconFolder}></img>
                                <label className='nameAdditionl'>{taskItem.categoryName}</label>
                            </div>
                        </div>
                        <div className='description'>
                        {taskItem.description}
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
            </div>
            <MyModel visible={deleteModal} setVisable={setDeleteModal} >
                <TaskFormDelete 
                deleteObject='задачу'
                close={setDeleteModal}
                removeTask={()=>TaskItem.remove(taskItem.id)}
                nameDeleteObject={taskItem.name}  
                />

               
            </MyModel>
            <MyModel visible={editModal} setVisable={setEditModal} >
                <TaskFormEdit
                close={setEditModal}
                task={taskItem}   
                editTask={()=>TaskItem.update(taskItem)} 
               />

               
            </MyModel>
    </div>
    );
}

export default TaskItem;
