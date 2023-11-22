import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'header-box'}>
            <Link to={'/'}>Home</Link>
            <Link to={'/search'}>Search</Link>
        </header>
    )
}

export default Header