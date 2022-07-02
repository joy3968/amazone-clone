import React from 'react';
import './Header.css'
// import AccessAlarms from '@mui/icons-material';

function Header() {
    return (
        <div className="header">
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
    
            <div className="header_search">
                <input className='header_searchInput' type="text"></input>   
            </div>
            {/* <AccessAlarms className="header_searchIcon"/> */}

            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>안녕하세요 !</span>
                    <span className='header_optionLineTwo'>로그인하기</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>안녕하세요 !</span>
                    <span className='header_optionLineTwo'>로그인하기</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>안녕하세요 !</span>
                    <span className='header_optionLineTwo'>로그인하기</span>
                </div>

            </div>
        </div>
    );
}

export default Header;