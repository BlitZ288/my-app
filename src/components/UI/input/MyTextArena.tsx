import React from 'react'
import TemplateInput from './MyInput'
import classes from "./MyInput.module.css"

const MyTextArena = ({labelInput,...props}:IMyTextIntput) => {
  return (
    <TemplateInput  labelInput={labelInput} required={props.required}>
      <textarea {...props.className=classes.description__textarea}  {...props}>MyTextArena</textarea>

     </TemplateInput>
  )
}

export default MyTextArena