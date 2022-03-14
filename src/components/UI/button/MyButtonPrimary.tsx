import React from 'react'
import classes from './MyButton.module.css';

 const MyButtonPrimary = ({children , ...props}:IMyButtonPrimary) => {
  return (
    <button {...props} className={classes.myBtn}>
        {children}
    </button>
  )
}
export default MyButtonPrimary;
