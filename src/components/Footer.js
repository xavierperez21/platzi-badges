import React from 'react';

import './styles/Footer.css';
import github_icon from '../images/github_icon.svg';
import linkedin_icon from '../images/linkedin_icon.svg';
import instagram_icon from '../images/instagram_icon.svg';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <ul class="social__media">
                    <li class="social__media-item">
                        <a href="https://github.com/xavierperez21" target="_blank" rel="noopener noreferrer">
                            <img src={github_icon} alt="github"/>
                        </a>
                    </li>
                    <li class="social__media-item">
                        <a href="https://linkedin.com/in/luis-xavier-pérez-miramontes-7452a6171" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin_icon} alt="linkedin"/>
                        </a>
                    </li>
                    <li class="social__media-item">
                        <a href="https://www.instagram.com/luisxavperez/" target="_blank" rel="noopener noreferrer">
                            <img src={instagram_icon} alt="instagram"/>
                        </a>
                    </li>
                </ul>
                <p>Made by Xavier Pérez</p>
            </div>
        );
    }
}

export default Footer;