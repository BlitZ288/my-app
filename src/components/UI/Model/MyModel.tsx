import styleModel from './MyModel.module.css';

 const MyModel = ({children , visible, setVisable}:IMyModel) => {
  const rootClass= [styleModel.myModel];
  if(visible){
      rootClass.push(styleModel.active);
  }

  return (
    <div className={rootClass.join(' ')} onClick={()=>setVisable(false)}>
        <div className={styleModel.myModelContent} onClick={e => e.stopPropagation()}>
            {children}
        </div>

    </div>
  )
}

export default  MyModel;