import React from 'react';



export default function Header() {
    return (
    
        <header className="text-white bg-dark">
        <div className="container py-5">
            <div className="row">
                <div className="col-xs-3 col-lg-2 text-center">
                    <img src="https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png"
                        alt="Person - Avatar Placeholder@seekpng.com" className="border border-5 rounded-circle img-fluid" />
                </div>
                <div className="col text-center text-lg-start">
                    <h1>Ava Khan</h1>
        
                    <p className="lead">Software development student at SAIT (Southern Alberta Institute of Technology).</p>
        
                    <ul className="list-inline">
                        <li className="list-inline-item my-2"><a href="javaria.khan@edu.sait.ca" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-envelope pe-1"></i>
                                <span className="text-center">E-mail</span></a></li>
                        <li className="list-inline-item my-2"><a href="https://www.linkedin.com/in/javaria-khan-700333251/" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-linkedin pe-1"></i>
                                LinkedIn</a></li>
                        <li className="list-inline-item my-2"><a href="https://github.com/jvakhan" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-github pe-1"></i>
                                GitHub</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </header>
    )
   
}


