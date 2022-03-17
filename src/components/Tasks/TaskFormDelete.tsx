import React, { FC } from 'react'
import MyForm from '../UI/form/MyForm';

 const TaskFormDelete:FC<IDeleteForm> = ({nameDeleteObject,removeTask, close}) => {
  return (
    <MyForm
    titleForm={'Удаление задачи'}
    titlePrimaryButton={'Да'}
    titleSecondaryButton={'Нет'}
    move={removeTask}
    close={close}
    >
        <div className='delete__message'>
        Вы уверены, что хотите удалить {} {'"'+nameDeleteObject+'"'}?
        </div>
    </MyForm>
  )
}
export default TaskFormDelete;
