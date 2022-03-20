import React from 'react'
import TemplateInput from './MyInput'

const MyTextArena = ({labelInput, ...props}:IMyInput) => {
  return (
    <TemplateInput  labelInput={labelInput} required={props.required} valid={props.valid}>
      <textarea name={props.name}  className={props.className} {...props} ></textarea>

     </TemplateInput>
  )
}

export default MyTextArena