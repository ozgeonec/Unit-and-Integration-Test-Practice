import * as React from 'react';
import './styles.scss';

const Header = (props) => {
    return (
        <header data-test="headerComponent">
            <div className="wrapper">
                <div className="logo">
                    LOGO
                </div>
            </div>
        </header>
    )
};

export default Header;
