import React, { useEffect, useState } from "react";
import "./Navigation.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom/dist";

export function Navigation(props) {
    const [classs, setClasss] = useState('');
    const [showNavbar, setShowNavbar] = React.useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setClasss(window.scrollY > 300 ? "top-nav-collapse" : "");
        })
    }, [])

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    return (

        <nav className={`navbar navbar-expand-lg fixed-top navbar-dark Play ${classs}`}>
            <div className="container">
                <a className="navbar-brand logo-image" href="#home">
                    <span className="logo BerkshireSwash">H</span>
                </a>
                <a className="navbar-brand logo-text page-scroll" href="#home">Hassan</a>

                <button className="navbar-toggler p-0 border-0" onClick={handleShowNavbar} type="button" data-toggle="offcanvas">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`navbar-collapse offcanvas-collapse nav-elements  ${showNavbar? "open":""}`} id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item" onClick={()=>setShowNavbar(false)}>
                            <Link className="nav-link page-scroll" to="/">Home</Link>
                        </li>
                        <li className="nav-item" onClick={()=>setShowNavbar(false)}>
                            <a className="nav-link page-scroll" href="#profile">Profile</a>
                        </li>
                        <li className="nav-item" onClick={()=>setShowNavbar(false)}>
                            <a className="nav-link page-scroll" href="#services">Services</a>
                        </li>
                        <li className="nav-item" onClick={()=>setShowNavbar(false)}>
                            <a className="nav-link page-scroll" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item" onClick={()=>setShowNavbar(false)}>
                            <a className="nav-link page-scroll" href="#testimonial">Testimonial</a>
                        </li>
                        <li className="nav-item" onClick={()=>setShowNavbar(false)}>
                            <a className="nav-link page-scroll" href="#contact">Contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    );
}