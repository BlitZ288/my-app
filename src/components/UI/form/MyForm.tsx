import React, { FC } from 'react'
import MyButtonPrimary from '../button/MyButtonPrimary';
import MyButtonSecondary from '../button/MyButtonSecondary';
import '../../../styles/form.css';
 const MyForm:FC<IMyForm> = (propsForm) => {
 
  function defualtSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault(); 
    propsForm.move();
  }

  return (
    <form className='from__templete' onSubmit={(event)=>defualtSubmit(event)}>
        <div className='header__form'>
          <h2 className='title__form'>{propsForm.titleForm}</h2>
          </div>
        <div className='content__form'>
          {propsForm.children}
        </div>
        <div className='conteiner__button'>
          
          <MyButtonPrimary disabled={!propsForm.valid}>{propsForm.titlePrimaryButton}</MyButtonPrimary>
          
          <MyButtonSecondary  onClick={()=>propsForm.close(false)}>{propsForm.titleSecondaryButton}</MyButtonSecondary>
        </div>

    </form>
  )
}
export default MyForm;
