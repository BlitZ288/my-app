import React, { FC } from 'react'
import './MyButton.css';

 const MyButtonPrimary:FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children , ...props}) => {
  return (
    <button {...props} className={'myBtn'}>
        {children}
    </button>
  )
}
export default MyButtonPrimary;
