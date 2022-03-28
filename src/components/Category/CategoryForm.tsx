import  { FC } from 'react'
import { useInput } from '../../Hooks/useInput';
import MyForm from '../UI/form/MyForm';
import MyTextArena from '../UI/input/MyTextArena';
import MyTextInput from '../UI/input/MyTextInput';

const CategoryForm:FC<ICategoryForm> = ({workingOnCategory, category, close, lastId, titlePrimaryButton, titleForm}) => {

    const nameCategory = useInput(category?.name??  '', {isEmpty:true, maxLenght:254 });
    const descriptionCategory = useInput(category?.description?? '', { maxLenght:1535 });   
    
    const currentCategory = category?? {} as ICategory; 

    const move = ()=>{
        const tempCategory:ICategory = currentCategory ? {
            ...currentCategory,
            name: nameCategory.value,
            description: descriptionCategory.value,
        
        } : {
            name: nameCategory.value,
            description: descriptionCategory.value,
            remove: () => { },
            update: () => { },
            id: lastId?? 0,
        }
        workingOnCategory(tempCategory);
        close(false);  
    }
    
  return (
    <MyForm 
       titleForm={titleForm}        
       titlePrimaryButton={titlePrimaryButton}
       titleSecondaryButton={'Закрыть'} 
       move={move}        
       close={close}  
       valid={(nameCategory.errorMap.size === 0 && descriptionCategory.errorMap.size === 0)} 
       >
       <div className='content__add'>
          
            <MyTextInput
            errors={ nameCategory.isDirty ?   Array.from(nameCategory.errorMap.values()) : []}
            name='task__name'
            className={((nameCategory.errorMap.size && nameCategory.isDirty) ? 'error__input' : '' )}
            labelInput='Имя' 
            onChange = {e => nameCategory.onChange(e)}
            onBlur={e => nameCategory.onBlur(e)}
            value ={nameCategory.value}
            type="text" 
            placeholder='Назавание'
            required         
            /> 
        
          <MyTextArena
          errors={Array.from(descriptionCategory.errorMap.values())}
          name='task__description'
          className={'description__textarea ' + ((descriptionCategory.errorMap.size) ? 'error__input' : '')}
          labelInput='Описание' 
          onChange = {e => descriptionCategory.onChange(e)} 
          value={descriptionCategory.value}
          placeholder='Описание'          
          />               
        </div>
       </MyForm> 
  )
}

export default CategoryForm