import classes from "./MyInput.module.css"
const MyTextInput = ({labelInput,...props}:IMyTextIntput) =>{
    return(
        <fieldset className={classes.fieldsetInput}> 
            <legend className={classes.legendInput}>{labelInput}<span className={classes.req}>*</span></legend> 
            <input {...props} className={classes.myInput} type="text" placeholder="Введите имя задачи" required />
        </fieldset>
    )

}
export default MyTextInput;