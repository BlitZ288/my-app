import React, { FC, useContext, useState } from 'react'
import CategoryServise from '../../API/CategoryServise';
import MyForm from '../UI/form/MyForm';
import MyTextArena from '../UI/input/MyTextArena';
import MyTextInput from '../UI/input/MyTextInput';

 const CategoryFormAdd :FC<ICreateForm> = ({createCategory, lastId ,close}) => {

  const [category , setCategory] = useState({name:'',description:''})
  
  async function AddCategory(category: ICategory) {     
    await CategoryServise.AddCategory(category);
  }

  const addNewCategory = (event:React.FormEvent<HTMLFormElement>)  =>
  {
    event.preventDefault();   

      const newCategory :ICategory ={
           ...category ,
           id:lastId+1,           
           remove:()=>{}
      };     
      createCategory?.(newCategory);   
      AddCategory(newCategory);     
      setCategory({name:'',description:''});        
  }
  return (
    <MyForm
    titleForm={'Создание категории'}        
    titlePrimaryButton={'Создать'}
    titleSecondaryButton={'Закрыть'} 
    move={addNewCategory}        
    close={close}      
    > 

    <div className='content__add'>
            <MyTextInput 
            className='input__AddCategory'
            labelInput='Имя' 
            onChange = {(e:React.KeyboardEvent<HTMLInputElement>) => setCategory({...category, name:e.currentTarget.value})}
            value ={category.name}
            type="text" 
            placeholder='Назавание'
            required          
           />

            <MyTextArena
            className='description__input'
            labelInput='Описание' 
            onChange = {(e:React.KeyboardEvent<HTMLInputElement>) => setCategory({...category, description:e.currentTarget.value})}
            type="text"
            value ={category.description}
            placeholder='Описание '
            required
            />
    </div>
    
    </MyForm>
  )
}
export default CategoryFormAdd;
