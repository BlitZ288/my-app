import React, { useState } from 'react'
import classes from "./MyInput.module.css"
import arrowDown from '../../img/drop-down-arrow.svg';
import TemplateInput from './MyInput';

 const MySelectInput = ({optionsCategories,  defaultValue , labelSelect , onChange ,required}:IMySelect) => {
  
    const [isActive , setIsActive] = useState(false);
    const [currentItem, setCurrentItem] = useState(defaultValue);
    
    const [classItemCurrent,setClassItemCurrent]= useState<Array<string>>([classes.select__current ]) ;

    function dropList(){
        isActive ?  setIsActive(false) : setIsActive(true);        
    }   

    function handlerClickItem(value:string|null, title:string){  
        if(classItemCurrent.indexOf(classes.select__current_isActive) === -1)
        {
           setClassItemCurrent([...classItemCurrent,classes.select__current_isActive]);  
        }       
        setCurrentItem(title);
        onChange(Number(value));
    }  

  return (
    <TemplateInput labelInput={labelSelect} required={required}>
        <div onClick={()=>dropList()} className={classes.select +' '+ (isActive ? classes.is_active :'')  } >
            <div className={classes.select__header} >
                <div className={classItemCurrent.join(' ')}>{currentItem}</div>
                <div className={classes.select__icon}><img className={(isActive ? classes.rotate_scale_up :'')}  alt='arrow' src={arrowDown}></img></div>
            </div>

            <div className={classes.select__body}>               
               {
                    optionsCategories?.map((option)=>
                    <div 
                    onClick={(event)=>handlerClickItem(event.currentTarget.getAttribute('data-value'), event.currentTarget.innerText)}
                    key={option.id} 
                    className={classes.select__item} 
                    data-value={option.id}>
                    {option.name}
                    </div>)  
               }
            </div>
        </div>  
    </TemplateInput>  
  )
}
export default MySelectInput;
