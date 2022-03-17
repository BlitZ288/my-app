import React from 'react'
import classes from "./MyInput.module.css"

const TemplateInput  = ({children,labelInput,required, className}:IMyInput) => {
  return (
    <fieldset  className={classes.fieldsetInput + ' '+ className}> 

      <legend className={classes.legendInput}>
      {labelInput}
      {required?<span className={classes.req}> *</span>:''}        
      </legend>

     {children}
    </fieldset>
  )
}
export default TemplateInput;