import React from 'react';
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-contianer' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='options' to='./shop'>
                SHOP
            </Link>
            <Link className='options' to='./contact'>
                CONTACT
            </Link>
            {
                currentUser ? (
                <div className='options' onClick={()=> auth.signOut()}>SIGN OUT</div>
                ) : (
                <Link className='options' to='./signin'>SIGN IN</Link>
                )
            }
        </div>
    </div>
)

export default Header