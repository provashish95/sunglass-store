import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-bg">
                <div className="container-fluid">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item text-navbar text-white">
                            <h1 >Sunglass Store</h1>
                            <h4>Select Your best Four</h4>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;