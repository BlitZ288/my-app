import React from 'react'
import classes from './MyButton.module.css';

 const MyButtonImge = ({...props}:IMyButtonSecondary) => {
  return (
    <button {...props} className={classes.myBtnClose} type='button' ></button>
  )
}
export default MyButtonImge;
