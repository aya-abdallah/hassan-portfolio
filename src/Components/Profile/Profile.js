import React from "react";
import "./Profile.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Profile(props) {
    return (
        <header id="home" className="header" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="text-container">
                            <h1 className="h1-large ">Crafting captivating worlds and immersive experiences. </h1>
                            <span className="intro-text">
                                From casual games to multiplayer epics, and pushing boundaries with interactive AR/VR applications on Unity and Unreal Engine.
                            </span><br />
                            <a className="btn-solid-lg page-scroll" href="#about">Discover</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}