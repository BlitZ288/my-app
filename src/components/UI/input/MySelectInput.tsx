import React from 'react'
import classes from "./MyInput.module.css"

 const MySelectInput = ({optionsTasks, optionsCategories, defaultValue , labelSelect , value , onChange}:IMySelect) => {
  
    function serchCategoryNameById(idCategory?:number) :string
    {   
        let indexSerch = optionsCategories.findIndex(category=> (category.id === idCategory));
        return optionsCategories[indexSerch].name;
    }

  return (
    <fieldset className={classes.fieldsetInput}> 
    <legend className={classes.legendInput}>{labelSelect}<span className={classes.req}>*</span></legend> 
    
        <select onChange={event => onChange(Number(event.currentTarget.value))} value={value} className={classes.mySelect} >
            <option value={''} className={classes.defaultValue}  selected>{defaultValue}</option>
            {
                optionsTasks.map(option =>
                    <option key={option.id} value={option.categoryId}>{/*serchCategoryNameById(option.categoryId)*/}</option>
                )
            }
        </select>
 
</fieldset>
   
  )
}
export default MySelectInput;
