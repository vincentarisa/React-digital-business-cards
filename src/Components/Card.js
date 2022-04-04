import React from "react";
import profilepic from "../Images/profilepic.jpg"

export default function Card(){
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card position-absolute mt-5 custom-card-body">
                <img src = {profilepic} className = "card-img-top prof-pic" alt = "Profile picture"/>

                <div className="card-body p-4 custom-card-content text-white">
                    <h1 className="custom-h1 text-center">Laura Smith</h1>
                    <h5 className="custom-h5 text-center">Frontend Developer</h5>
                    <h6 className="custom-h6 text-center">laurasmith.website</h6>

                    <div className="d-flex justify-content-around pt-3 pb-3">
                        <a href="" className="btn btn-light btn-sm links-btn"><i className="bi bi-envelope"></i> Email</a>
                        <a href="" className="btn btn-primary btn-sm links-btn"><i className="bi bi-linkedin"></i> LinkedIn</a>
                    </div>

                    <h2 className="custom-h2">About</h2>
                    <p className="custom-p">I am a frontend developer with a particular interest in making things simple and automating
                        daily tasks. I try to keep up with security and best practices, and am always looking for
                        new things to learn.
                    </p>

                    <h2 className="custom-h2">Interests</h2>
                    <p className="custom-p">
                        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek.
                        Pop culture ninja. Coffee fanatic.
                    </p>
                </div>

                <div className="card-footer custom-card-footer">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-around">
                            <a href="" className="btn social-btn btn-sm"><i className="bi bi-github"></i></a>
                            <a href="" className="btn social-btn btn-sm"><i className="bi bi-stack-overflow"></i></a>
                            <a href="" className="btn social-btn btn-sm"><i className="bi bi-twitter"></i></a>
                            <a href="" className="btn social-btn btn-sm"><i className="bi bi-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}