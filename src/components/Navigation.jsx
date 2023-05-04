import React from 'react'
import "./Styles/Dashboard.css"

export default function Navigation() {
    return (
        <>
            <div id="Navbar">
                <div>
                    <h3>Document Dispatch Register</h3>
                </div>
                <div>
                    <a className="fancy" href="/">
                        <span className="top-key"></span>
                        <span className="text">Logout</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </a>                
                </div>
            </div>

        </>
    )

}