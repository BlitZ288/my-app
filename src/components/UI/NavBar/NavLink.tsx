import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styleLink from './NavBar.module.css';

 const NavLink = ({pathname}:INavLink) => {
  return (
    <nav className="continerButtonHeader"> 
                <Link
                 className={
                     pathname ==='/Tasks' 
                     ?
                     styleLink.buttonNav + ' '+ styleLink.buttonNavActive 
                     :
                     styleLink.buttonNav 
                    } 
                 to={'Tasks'}>
                 Задачи 
                </Link>

                <span className="separator">|</span>

                <Link
                 className={ 
                    pathname ==='/Category' 
                    ?
                    styleLink.buttonNav + ' '+  styleLink.buttonNavActive 
                    :
                    styleLink.buttonNav}
                 to={'Category'}>
                 Категории
                 </Link> 

            </nav>
  )
}
export default NavLink
