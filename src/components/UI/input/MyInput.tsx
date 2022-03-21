import React from 'react'
import  "./MyInput.css"

const TemplateInput  = ({children,labelInput,required, className}:IMyInput) => {
  return (
    <fieldset  className={'fieldsetInput' + ' '+ className}> 

      <legend className={'legendInput'}>
      {labelInput}
      {required?<span className={'req'}> *</span>:''}        
      </legend>

     {children}
    </fieldset>
  )
}
export default TemplateInput;