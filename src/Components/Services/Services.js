import React from "react";
import "./Services.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Services(props) {
    return (
        <section id="services" className="services spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="services__title">
                            <div className="section-title">
                                <span>Our services</span>
                                <h2>What We do?</h2>
                            </div>
                            <p>If you hire a videographer of our team you will get a video professional to make a custom
                                video for your business and, once the project is over.</p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="services__item">
                                    <div className="services__item__icon">
                                        <img className="imageIcon" src={require("../../images/icons/Unity.png")} alt="" />
                                    </div>
                                    <h4>Unity</h4>
                                    <p>Used unity game engine for {new Date().getFullYear() - 2017}+ years in different projects,from games to simulations to mobile apps.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="services__item">
                                    <div className="services__item__icon">
                                        <img className="imageIcon" src={require("../../images/icons/Unreal.png")} alt="" />
                                    </div>
                                    <h4>Unreal</h4>
                                    <p>Experienced in unreal engine and capable of developing all kind of AAA games with it, From battle royale games to FPS games to MMO games.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="services__item">
                                    <div className="services__item__icon">
                                        <img className="imageIcon" src={require("../../images/icons/AR&VR.png")} alt="" />
                                    </div>
                                    <h4> AR & VR </h4>
                                    <p>Used different frameworks like Photon and Unet with unity to integrate multiplayer to different kind of games,board games with turn based and Host migration multiplayer, and real-time strategy games.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="services__item">
                                    <div className="services__item__icon">
                                        <img className="imageIcon" src={require("../../images/icons/Multiplayer.png")} alt="" />
                                    </div>
                                    <h4>Multiplayer</h4>
                                    <p>Developed all kind of AR apps and VR games, used vuforia marker AR to develop multiple mobile apps,used SteamVR to develop multiple PC games and simulations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}