import TemplateInput from "./MyInput";
import   "./MyInput.css"
const MyTextInput = ({labelInput, ...props}:IMyInput) =>{
    return(
    <div style={{display:'flex', flexDirection:'column', marginBottom: '20px'}}>
        <TemplateInput className={props.className } labelInput={labelInput} required={props.required} >
            <input {...props} className='myInput'  />
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
export default MyTextInput;