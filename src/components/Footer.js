import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <ul className="social-btns">
                <li className="social-btn">
                    <a href="https://instagram.com/thexploremonk" target="_blank"><i className="fab fa-instagram" ></i></a>
                </li>
                <li className="social-btn">
                    <a href="https://www.linkedin.com/in/ujjwal-tfd" target="_blank"><i className="fab fa-linkedin-in" ></i></a>
                </li>
                <li className="social-btn">
                    <a href="https://github.com/ujjwal-root" target="_blank"><i className="fab fa-github" ></i></a>
                </li>
                </ul>

                <div className="to-top">
                <a className="rocket" href="#root">
                    <img src="/travel.png" alt="ico" /> <br />
                </a>
                </div>

                <p className="copyright">
                <i className="far fa-copyright" aria-hidden="true"></i> Xploremonk {new Date().getFullYear()}
                </p>
            </div>
            </footer>
    )
}

export default Footer;
