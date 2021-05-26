import React from 'react'
import '../Desktop/desktop.css'

export default function Desktop() {
    return (
        <div className="desktop-container">
            <div className="desktop-text-box">
                <img className='logo-image-desktop' src="logo.png" alt="logo" />
                <div>Please open the app from a mobile device</div>
            </div>
             <img className='phone-image' src=".././Mockup.png" alt="smartphone" />
        </div>
    )
}
