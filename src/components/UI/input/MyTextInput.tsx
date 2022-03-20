import TemplateInput from "./MyInput";
import classes from "./MyInput.module.css"
const MyTextInput = ({labelInput, ...props}:IMyInput) =>{
    return(
        <TemplateInput className={props.className } labelInput={labelInput} required={props.required} valid={props.valid}>
            <input {...props} className={classes.myInput}  />
        </TemplateInput>
    )
}
export default MyTextInput;