import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="logo">
                {/* Your name or logo here */}
                <h1>David Wang</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#coursenotes">Course Notes</a></li>
                    <li><a href="#personal">Personal</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
