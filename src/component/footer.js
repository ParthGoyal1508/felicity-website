import React, { Component } from 'react';
import './bootstrap.css';
import './style.css';

class Footer extends Component {
    render() {
        return (
            <div>
                        <footer className="section footer-classic section-full section-full-1 section-sm section-inset-2 bg-gray-3 context-dark text-md-center" id="contacts">
                            <div className="container">
                                <div className="subtitle-classic wow fadeInUp">Get in touch</div>
                                <h2><span className="d-inline-block wow fadeInLeft">Let’s work</span> <span className="d-inline-block wow fadeInRight">together</span>
                                </h2>
                                <form className="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                                    <div className="form-wrap wow fadeInRight">
                                        <label className="form-label" for="contact-name">Name</label>
                                        <input className="form-input" id="contact-name" type="text" name="name" data-constraints="@Required" />
                                    </div>
                                    <div className="form-wrap wow fadeInRight">
                                        <label className="form-label" for="contact-email">E-Mail</label>
                                        <input className="form-input" id="contact-email" type="email" name="email" data-constraints="@Required @Email" />
                                    </div>
                                    <div className="form-wrap wow fadeInRight">
                                        <label className="form-label" for="contact-message">Message</label>
                                        <textarea className="form-input" id="contact-message" name="message" data-constraints="@Required"></textarea>
                                    </div>
                                    <div className="form-button text-center">
                                        <button className="button button-default wow fadeInUp" type="submit">Send message</button>
                                    </div>
                                </form>
                            </div>
                            <div className="container">
                                <div className="footer-classic-list-social wow fadeInUp">
                                    <ul className="list-inline list-social list-inline-sm">
                                        <li><a className="icon fa fa-linkedin" href="#"></a></li>
                                        <li><a className="icon fa fa-twitter" href="#"></a></li>
                                        <li><a className="icon fa fa-facebook" href="#"></a></li>
                                        <li><a className="icon fa fa-instagram" href="#"></a></li>
                                    </ul>
                                </div>
                                <p className="rights wow fadeInUp"><span>&copy;&nbsp; </span><span className="copyright-year"></span><span>&nbsp;</span><span>DePaletra</span><span>.&nbsp;</span><span>All rights reserved. Terms and Conditions</span><br /><a href="privacy-policy.html">Privacy Policy</a></p>
                            </div>
                        </footer>
                    </div>
        );
    }
}
export default Footer;