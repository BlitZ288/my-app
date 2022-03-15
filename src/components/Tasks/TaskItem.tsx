import React from 'react';
import MyButtonImge from '../UI/button/MyButtonImge';
import MyButtonSecondary from '../UI/button/MyButtonSecondary';
import editIamge from '../img/edit.svg';
import deleteImage from '../img/delete.svg';

const TaskItem = (TaskItem:ITask) => {    
    return (
      <div>     
        <div className='continerItem'>
                <div className='itemTodo'>
                    <div className='infoItem'>
                        <div className='headerItem'>
                            <label className='name'>{TaskItem.name}</label>
                            <div className='additionalInfo'>
                                <label className='nameAdditionl'>{TaskItem.categoryId}</label>
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
