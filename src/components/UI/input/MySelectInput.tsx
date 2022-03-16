import React, { useState } from 'react'
import classes from "./MyInput.module.css"
import arrowDown from '../../img/drop-down-arrow.svg';
import TemplateInput from './MyInput';

 const MySelectInput = ({optionsTasks,  defaultValue , labelSelect , value , onChange ,required, setNameCategory}:IMySelect) => {
  
    const [isActive , setIsActive] = useState(false);
    const [currentItem, setCurrentItem] = useState(defaultValue);

    function dropList(){
        isActive ?  setIsActive(false) : setIsActive(true);        
    }
    function handlerClickItem(value:string|null , title:string){       
        setCurrentItem(title);
        onChange(Number(value));
        setNameCategory(title);
    }

  return (
    <TemplateInput labelInput={labelSelect} required={required}>
        <div onClick={()=>dropList()} className={classes.select +' '+ (isActive ? classes.is_active :'') }>
            <div className={classes.select__header}>
                <div className={classes.select__current}>{currentItem}</div>
                <div className={classes.select__icon}><img className={(isActive ? classes.rotate_scale_up :'')}  alt='arrow' src={arrowDown}></img></div>
            </div>

            <div className={classes.select__body}>               
               {
                    optionsTasks.map((option)=>
                    <div onClick={(event)=>handlerClickItem(event.currentTarget.getAttribute('data-value'),event.currentTarget.innerText)}
                    key={option.id} 
                    className={classes.select__item} 
                    data-value={option.categoryId}>
                    {option.categoryName}
                    </div>)
               }
            </div>
        </div>  
    </TemplateInput>  
  )
}
export default MySelectInput;
