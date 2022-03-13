import classes from "./MyInput.module.css"
const MyInput = (props) =>{
    return(
        <fieldset className={classes.fieldsetInput}> 
            <legend className={classes.legendInput}>Имя<span className={classes.req}>*</span></legend> 
            <input {...props} className={classes.myInput} type="text" placeholder="Введите имя задачи" required />
        </fieldset>
    )

}
export default MyInput;