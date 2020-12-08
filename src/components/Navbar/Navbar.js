import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="px-4 my-3">
            <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
                <img className="logo" src="https://scontent.fdac26-1.fna.fbcdn.net/v/t1.0-9/123145547_2910003942619395_7512819422516471058_n.png?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=saCIeSwA1VoAX8YEMaR&_nc_ht=scontent.fdac26-1.fna&oh=5cc3f634e1316f14c84b61b7cd9b16fc&oe=5FF5C9F5" alt=""/>
                <div className="navItem d-flex flex-md-row flex-column flex-wrap">
                    <button className="btn font-weight-bold mx-3">Live Classes</button>
                    <button className="btn font-weight-bold mx-3">Video Library</button>
                    <button className="btn font-weight-bold mx-3">Course</button>
                    <button className="btn font-weight-bold mx-3">Book</button>
                    <button className="btn font-weight-bold mx-3">Board</button>
                    <button className="btn font-weight-bold mx-3">Exam</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;