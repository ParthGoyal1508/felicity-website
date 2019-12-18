import React, { Component } from 'react';
import './sidenav.css';
import './bootstrap.css';
import './style.css';
// import './fonts.css';

class Sidenav extends Component {
    render() {
        return (
            <div>
                <div>
                    <header className="page-header">
                        <div className="rd-navbar-wrap">
                            <nav className="rd-navbar" data-layout="rd-navbar-sidebar" data-device-layout="rd-navbar-sidebar" data-sm-layout="rd-navbar-sidebar" data-sm-device-layout="rd-navbar-sidebar" data-md-layout="rd-navbar-sidebar" data-md-device-layout="rd-navbar-sidebar" data-lg-layout="rd-navbar-sidebar"
                                data-lg-device-layout="rd-navbar-sidebar" data-xl-layout="rd-navbar-sidebar" data-xl-device-layout="rd-navbar-sidebar" data-xxl-layout="rd-navbar-sidebar" data-xxl-device-layout="rd-navbar-sidebar" data-lg-stick-up-offset="46px" data-xl-stick-up-offset="46px"
                                data-xxl-stick-up-offset="46px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true" className="rd-navbar-style-1">
                                <div className="rd-navbar-main-outer">
                                    <div className="rd-navbar-main">
                                        <div className="rd-navbar-panel">
                                            <button className="rd-navbar-toggle" ><span></span></button>
                                            <div className="rd-navbar-brand">
                                                <a className="brand" href="index.html">
                                                    <img className="brand-logo-desktop" src="images/logo-default-152x94.png" alt="" width="152" height="94" srcset="images/logo-default-304x188.png 2x" />
                                                    <img className="brand-logo-mobile" src="images/logo-default-152x65.png" alt="" width="152"
                                                        height="65" srcset="images/logo-default-304x130.png 2x" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="rd-navbar-nav-wrap">
                                                <div className="rd-navbar-nav-container">
                                                    <ul className="rd-navbar-nav">
                                                        <li className="rd-nav-item active"><a className="rd-nav-link" href="index.html">Home</a>
                                                        </li>
                                                        <li className="rd-nav-item"><a className="rd-nav-link" href="about.html">About</a>
                                                        </li>
                                                        <li className="rd-nav-item"><a className="rd-nav-link" href="single-project.html">Single Project</a>
                                                        </li>
                                                        <li className="rd-nav-item"><a className="rd-nav-link" href="blog-post.html">Blog post</a>
                                                        </li>
                                                        <li className="rd-nav-item"><a className="rd-nav-link" href="privacy-policy.html">Privacy Policy</a>
                                                        </li>
                                                        <li className="rd-nav-item"><a className="rd-nav-link" href="contacts.html">Contacts</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="contacts-classic">
                                                        <li>
                                                            <div className="contacts-classic-title">E-mail:</div><a href="mailTo:#">contact@felicity.iiit.ac.in</a>
                                                        </li>
                                                        <li>
                                                            <div className="contacts-classic-title">Follow Us:</div>
                                                            <ul className="list-inline list-social list-inline-sm">
                                                                <li><a className="icon fa fa-linkedin" href="#"></a></li>
                                                                <li><a className="icon fa fa-twitter" href="#"></a></li>
                                                                <li><a className="icon fa fa-facebook" href="#"></a></li>
                                                                <li><a className="icon fa fa-instagram" href="#"></a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <ul className="nav-custom rd-navbar-nav">
                                    <li className="active"><a className="nav-custom-counter" href="#home"></a></li>
                                    <li><a className="nav-custom-counter" href="#about"></a></li>
                                    <li><a className="nav-custom-counter" href="#works"></a></li>
                                    <li><a className="nav-custom-counter" href="#team"></a></li>
                                    <li><a className="nav-custom-counter" href="#clients"></a></li>
                                    <li><a className="nav-custom-counter" href="#projects"></a></li>
                                    <li><a className="nav-custom-counter" href="#news"></a></li>
                                    <li><a className="nav-custom-counter" href="#contacts"></a></li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}
export default Sidenav;