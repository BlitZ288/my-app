import React, { FC } from 'react'
import  './MyButton.css';

 const MyButtonSecondary:FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children,...props}) => {
  return (
    <button {...props} className={'myBtn' + ' '+ 'mySecondaryBtn'} >    
        {children}
    </button>
  )
}
export default MyButtonSecondary;