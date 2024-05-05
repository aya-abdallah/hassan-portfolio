import React from "react";
import "./Profile.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Profile(props) {
    return (
        <header id="home" className="header" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h1 className="h1-large Platypi"> I enjoy participating in every aspect of game industry</h1>
                            <a className="btn-solid-lg page-scroll" href="#about">Discover</a>
                            <a className="btn-outline-lg page-scroll" href="#contact"><i className="fas fa-user"></i>Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}