import React from 'react';
import MyButtonSecondary from '../UI/button/MyButtonSecondary';

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
                            <MyButtonSecondary onClick={()=>TaskItem.remove(TaskItem.id)} >
                             Открыть
                            </MyButtonSecondary>
                            <MyButtonSecondary onClick={()=>TaskItem.remove(TaskItem.id)} >
                             Удалить
                            </MyButtonSecondary>
                    </div>
        
                </div>
            </div>
    </div>
    );
}

export default TaskItem;
