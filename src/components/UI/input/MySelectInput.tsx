import  { useState } from 'react'
import  "./MyInput.css"
import arrowDown from '../../img/drop-down-arrow.svg';
import TemplateInput from './MyInput';

 const MySelectInput = ({optionsCategories,  defaultValue , labelSelect , onChange ,required}:IMySelect) => {
  
    const [isActive , setIsActive] = useState(false);   
    const [currentItem, setCurrentItem] = useState(defaultValue);

    const [classItemCurrent,setClassItemCurrent]= useState<Array<string>>(['select__current' ]) ;

    function dropList(){
        isActive ?  setIsActive(false) : setIsActive(true);        
    }   

    function handlerClickItem(value:string|null, title:string){  
        if(classItemCurrent.indexOf('select__current_isActive') === -1)
        {
           setClassItemCurrent([...classItemCurrent,'select__current_isActive']);  
        }       
        setCurrentItem(title);
        onChange(Number(value));
    }  

  return (
    <div className='conteiner__select'>
    <TemplateInput labelInput={labelSelect} required={required}  >
        <div onClick={()=>dropList()} className={'select' + ' '+ (isActive ? 'is_active' :'')  } >
            <div className={'select__header'} >
                
                <div className={classItemCurrent.join(' ')}>{currentItem}</div>
                <div className={'select__icon'}><img className={(isActive ? 'rotate_scale_up' :'')}  alt='arrow' src={arrowDown}></img></div>
            </div>

            <div className={'select__body'}>               
               {
                optionsCategories?.map((option)=>
                    <div 
                    onClick={(event)=>handlerClickItem(event.currentTarget.getAttribute('data-value'), event.currentTarget.innerText)}
                    key={option.id} 
                    className={'select__item'} 
                    data-value={option.id}>
                    {option.name}
                    </div>
                )  
               }
            </div>
        </div>  
    </TemplateInput>  
    </div>
  )
}
export default MySelectInput;
