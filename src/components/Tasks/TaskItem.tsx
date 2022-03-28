import  {  useEffect, useState } from 'react';
import MyButtonImge from '../UI/button/MyButtonImge';
import editIamge from '../img/edit.svg';
import deleteImage from '../img/delete.svg';
import iconFolder from '../img/folder.svg';
import MyModel from '../UI/Model/MyModel';
import TaskFormDelete from './TaskFormDelete';
import TaskForm from './TaskForm';
import { useDataContext } from '../../Hooks/useDataContext';

const TaskItem = (TaskItem:ITask) => {  
    
    const [deleteModal, setDeleteModal] = useState(false); 
    const [editModal, setEditModal] = useState(false); 
    const {categories} = useDataContext();
    const [taskItem , setTaskItem] = useState(TaskItem);    

  function serchCategoryNamseById(idCategory?:number) :string
  { 
    let indexSerch = categories.findIndex(category=> (category.id === idCategory));  
    return indexSerch ===-1 ? '' : categories[indexSerch].name;
  }
 
  useEffect(()=>{ 
      
      setTaskItem({...TaskItem , categoryName:serchCategoryNamseById(TaskItem.categoryId)});

  },[TaskItem]);


    return (
      <div>  
        <div className='continerItem'>
                <div className='itemTodo'>
                    <div className='infoItem'>
                        <div className='headerItem'>
                            <label className='name'>{taskItem.name}</label>
                            {  taskItem.categoryName ?        
                            <div className='additionalInfo'>                                                         
                                <img className='additionalInfo__img' alt='folder' src={iconFolder}></img>
                                <label className='nameAdditionl'>{taskItem.categoryName}</label>
                            </div>
                             :''
                            } 
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
                removeById={TaskItem.remove}
                idDeleteObject={taskItem.id}
                nameDeleteObject={taskItem.name}  
                />

               
            </MyModel>
            <MyModel visible={editModal} setVisable={setEditModal} >
              <TaskForm
              workingOnTask={TaskItem.update}
              close={setEditModal}
              
              task={taskItem}   
              titlePrimaryButton='Сохранить'
              titleForm='Редактирование задачи'           
              categoryName={taskItem.categoryName ?? serchCategoryNamseById(taskItem.categoryId) }
              />               
               
            </MyModel>
    </div>
    );
}
  

export default TaskItem;
