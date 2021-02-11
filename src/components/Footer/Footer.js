import React from 'react'

// Fade
import Fade from 'react-reveal'
import { greeting } from '../../portfolio'
import './Footer.css'

function Footer() {
    return (
        <div className = 'footer-div'>
            <Fade>
            <p className="footer-text" >
          Made with <span role="img">❤️</span> by {greeting.username}
        </p>
            </Fade>
        </div>
    )
}

export default Footer
