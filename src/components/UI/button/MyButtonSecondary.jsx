import React from 'react'
import classes from './MyButton.module.css';

 const MyButtonSecondary = ({children, ...props}) => {
  return (
    <button {...props} className={classes.myBtn +' '+ classes.mySecondaryBtn}>
        {children}
    </button>
  )
}
export default MyButtonSecondary;