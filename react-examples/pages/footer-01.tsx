import React from 'react';

const footerIsolated = () => {
    return (
        <>
            <div style={{ height: '100vh', width: '100vw', backgroundColor: '#1f1b3d'}}>
            </div>

            <footer>
                <section className="footer-top-wrapper">
                    <section className='footer-top'>
                        <img className="logo" src="logos/atheros_logo_white.png" title='Logo' alt='Logo' />
                        <span className='social-links'>
                            <a>
                                <img src="icons/instagram.svg" title='Instagram' alt='Instagram' />                       
                            </a>
                            <a>
                                <img src="icons/facebook.svg" title='Facebook' alt='Facebook' />                       
                            </a>
                            <a>
                                <img src="icons/linkedin.svg" title='Linkedin' alt='Linkedin' />
                            </a>
                        </span>
                    </section>
                    <section>
                        <menu>
                            <h2>Atheros Learning</h2>
                            <li>
                                <a>For Students</a>
                            </li>
                            <li>
                                <a>For Lectors</a>
                            </li>
                            <li>
                                <a>Sign-Up/Log-In</a>
                            </li>
                        </menu>
                    </section>
                    <section>
                        <menu>
                            <h2>Atheros Cloud</h2>
                            <li>
                                <a>Private Data Detector</a>
                            </li>
                            <li>
                                <a>Text Classification</a>
                            </li>
                            <li>
                                <a>Duplicates Detector</a>
                            </li>
                        </menu>
                    </section>
                    <section>
                        <menu>
                            <h2>Company</h2>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>About Us</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </menu>
                    </section>
                </section>
                <section className="footer-bottom">
                        <small>© Atheros Intelligence Ltd. 2023 All rights reserved</small>
                </section>
            </footer>


                <style jsx>
                        {`
    footer {
        background: #050028;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
        font-size: 16px;
        color: white;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100%;
        bottom: 0;
    }

    .footer-top-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 48px;
        margin: 0 auto;
        padding: 16px;
        min-height: 160px;
    }

    .footer-top-wrapper > section {
        width: 180px;
    }

    h2 {
        text-align: left;
        color: #d2d0e6;
        margin-top: 0;
        margin-bottom: 16px;
        opacity: 0.7;
        font-size: 16px;
        font-weight: 600;
    }

    menu {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    menu li {
        margin-bottom: 16px;
    }


    .logo {
        width: 180px;
        margin-bottom: 8px;
    }

    .social-links {
        display: flex;
        flex-direction: row;
        gap: 8px;
        with: 180px;
    }

    .social-links img {
        width: 24px;
        height: 24px;
    }

    .footer-top {
        max-width: 800px;
    }

    .footer-bottom {
        height: 60px;
        margin-top: 48px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: #1f1b3d;
        padding: 4px;
    }

    .footer-bottom > small {
        font-size: 16px;
        margin: 0 4px;
    }

   
    
    `}
            </style>
        </>
    )
}

export default footerIsolated;