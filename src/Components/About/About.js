import React from "react";
import "./About.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

export function About(props) {
    return (
        <div id="profile" className="basic-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="text-container montserrat">
                            <h2>Hi there I'm <strong>Hassan,</strong></h2>
                            <p>I am a passionate game developer. I enjoy playing games. Because I like to play games, I became interested in game production at a young age.

                            </p>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div class="row flex-column h-100">
                            <div className="col flex-grow-0 text-container ex-container">
                                <div className="time Poppins"><FontAwesomeIcon icon={faCalendarDays} /> 2021 - Present</div>
                                <h6 className="job-title montserrat">Senior Game Developer</h6>
                                <h6 className="company">Upwork - Freelance</h6>
                                <p className="job-description montserrat">Worked on large scale multiplayer games for mobile.<br />
                                </p>

                            </div>
                            <div className="col">
                                <div className="text-container ex-container">

                                    <div className="time Poppins"><FontAwesomeIcon icon={faCalendarDays} /> 2021 - 2022</div>
                                    <h6 className="job-title montserrat">Senior Game Developer</h6>
                                    <h6 className="company">Chrono Games</h6>
                                    <p className="job-description montserrat"> Managed game rework and project analysis for game features and server
                                        tech that can scale to millions of users.<br />
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-container ex-container">
                                    <div className="time Poppins"><FontAwesomeIcon icon={faCalendarDays} /> 2021 - 2022</div>
                                    <h6 className="job-title montserrat">Senior Game Developer</h6>
                                    <h6 className="company">Front Tech, LLC – Part Time</h6>
                                    <p className="job-description montserrat"> Managed development and project architecture of a new mobile game.<br />
                                    </p>

                                </div>
                            </div>
                            <div className="col">
                                <div className="text-container ex-container">

                                    <div className="time Poppins"><FontAwesomeIcon icon={faCalendarDays} /> 2021 - 2021</div>
                                    <h6 className="job-title montserrat">Senior Game Developer</h6>
                                    <h6 className="company">Virtual Viewing Ltd</h6>
                                    <p className="job-description montserrat"> Worked closely with company leadership to architect and design games.<br />
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>


                    <hr />
                </div>
            </div>
        </div>
    );
}