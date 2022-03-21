import React, { FC } from 'react';
import './loader.css';
const Loader:FC<{visible:boolean}> = (visible) => {


  return (
    <div className={"loading " +( visible ? 'active' : '')}>
        <span className="loading__item "></span>
        <span className="loading__item"></span>
        <span className="loading__item"></span>
    </div>
  )
}

export default Loader