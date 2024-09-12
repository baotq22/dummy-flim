import * as React from 'react';
import logo from '../assets/logo.png'
import '../css/navbar.css';
import {useNavigate} from "react-router-dom"

export const Navbar = () => {
    const navigate = useNavigate();
    const handleClickHome = () => { navigate('/') };
    const handleClickToAll = () => { navigate('/movie') };
    return (
        <>
            <div id='navbar'>
                <img src={logo} className="logo" onClick={handleClickHome} alt="Logo" />
                <select name="language" id="language">
                    <option value="EN">English</option>
                    <option value="VN">Vietnamese</option>
                    <option value="JP">Japanese</option>
                    <option value="KR">Korean</option>
                </select>
                <button id='signIn' onClick={handleClickToAll}>View All Movies</button>
            </div>
        </>
    )
}