import React, { FC } from 'react'
import  './MyButton.css';

 const MyButtonImge:FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({...props}) => {
  return (
    <button {...props} className={'myBtnClose'} type='button' ></button>
  )
}
export default MyButtonImge;
