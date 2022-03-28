import React, { FC } from 'react'
import MyForm from '../UI/form/MyForm';

 const TaskFormDelete:FC<IDeleteForm> = ({nameDeleteObject, removeById,idDeleteObject, close}) => {
  
  const move = ()=>{
    removeById(idDeleteObject);
  }
    
  return (
    <MyForm
    valid={true}
    titleForm={'Удаление задачи'}
    titlePrimaryButton={'Да'}
    titleSecondaryButton={'Нет'}
    move={move}
    close={close}
    >
        <div className='delete__message'>
        Вы уверены, что хотите удалить  {'"'+nameDeleteObject+'"'}?
        </div>
    </MyForm>
  )
}
export default TaskFormDelete;
