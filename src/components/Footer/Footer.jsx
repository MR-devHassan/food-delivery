import React from 'react';
import "./Footer.css"
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ea. Quos nisi quisquam quas aperiam magni quia reprehenderit similique quod itaque molestiae temporibus atque illo, consequuntur autem dignissimos eaque est.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="socal icons" />
                <img src={assets.twitter_icon} alt="socal icons" />
                <img src={assets.linkedin_icon} alt="socal icons" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>home</li>
                <li>about us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-center">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-123-456-6789</li>
                <li>Conatct@foody@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyRight">All Right Reserved</p>
    </div>
  )
}

export default Footer
