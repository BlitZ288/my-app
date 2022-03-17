import React from 'react'
import TemplateInput from './MyInput'

const MyTextArena = ({labelInput, ...props}:IMyInput) => {
  return (
    <TemplateInput  labelInput={labelInput} required={props.required}>
      <textarea className={props.className} {...props} ></textarea>

     </TemplateInput>
  )
}

export default MyTextArena