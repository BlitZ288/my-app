import MyButtonImge from '../button/MyButtonImge';
import styleModel from './MyModel.module.css';
import closeImg from '../../img/close.svg';

 const MyModel = ({children , visible, setVisable}:IMyModel) => {
  const rootClass= [styleModel.myModel];
  if(visible){
      rootClass.push(styleModel.active);
  }

  return (
    <div className={rootClass.join(' ')} onClick={()=>setVisable(false)}>
        <div className={styleModel.myModelContent} onClick={e => e.stopPropagation()}>
          <div className='header__form'>
            <h2 className='title__form'>Создать Задачи</h2>
            <MyButtonImge onClick={()=>setVisable(false)}><img src={closeImg} alt='close'></img></MyButtonImge>         
          </div>
          {children}
        </div>
            
         

    </div>

   
  )
}

export default  MyModel;