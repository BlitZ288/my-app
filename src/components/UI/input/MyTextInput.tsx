import TemplateInput from "./MyInput";
import classes from "./MyInput.module.css"
const MyTextInput = ({labelInput,...props}:IMyTextIntput) =>{
    return(
        <TemplateInput className={props.className} labelInput={labelInput} required={props.required}>
            <input {...props} className={classes.myInput} type="text" placeholder="Введите имя задачи" required />
        </TemplateInput>
    )
}
export default MyTextInput;