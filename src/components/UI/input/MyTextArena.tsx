import React from 'react'
import TemplateInput from './MyInput'

const MyTextArena = ({labelInput, ...props}:IMyInput) => {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <TemplateInput  labelInput={labelInput} required={props.required} >
      <textarea name={props.name}  className={props.className} {...props} ></textarea>

     </TemplateInput>
     <div className="conteiner__errors">
            {
                props.errors?.map((value, index)=>{
                   
                    return(<span key={index} className={'error__message'}>{value}</span>)
                })
            }
        </div>
     </div>
  )
}

export default MyTextArena