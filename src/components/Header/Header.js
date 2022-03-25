import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-bg">
                <div className="container-fluid">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <h1 className="text-white">Sunglass Store</h1>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;