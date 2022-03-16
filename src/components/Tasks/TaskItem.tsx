import React from 'react';
import MyButtonImge from '../UI/button/MyButtonImge';
import editIamge from '../img/edit.svg';
import deleteImage from '../img/delete.svg';
import iconFolder from '../img/folder.svg';
const TaskItem = (TaskItem:ITask) => {   
   // console.log(TaskItem); 
    return (
      <div>     
        <div className='continerItem'>
                <div className='itemTodo'>
                    <div className='infoItem'>
                        <div className='headerItem'>
                            <label className='name'>{TaskItem.name}</label>
                            <div className='additionalInfo'>                                
                                <img className='additionalInfo__img' alt='folder' src={iconFolder}></img>
                                <label className='nameAdditionl'>{TaskItem.categoryName}</label>
                            </div>
                        </div>
                        <div className='description'>
                        {TaskItem.description}
                        </div>
                    </div>
                    <div className='containerButton'>
                        <MyButtonImge onClick={()=>{}}>
                             <img src={editIamge} alt='edit'></img>
                        </MyButtonImge>
                        <MyButtonImge onClick={()=>TaskItem.remove(TaskItem.id)}>
                             <img src={deleteImage} alt='edit'></img>
                        </MyButtonImge>
                            
                    </div>
        
                </div>
            </div>
    </div>
    );
}

export default TaskItem;
