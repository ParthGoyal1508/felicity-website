import React, { Component } from 'react';
import './bootstrap.css';
import './style.css';

class Clients extends Component {
    render() {
        return (
            <div>
                <section className="section section-full section-xl bg-gray-100 text-md-center" id="clients">
                    <div className="container">
                        <div className="subtitle-classic wow fadeInUp">Our clients and partners</div>
                        <h2><span className="d-inline-block wow fadeInLeft">Happy</span> <span className="d-inline-block wow fadeInRight">clients</span>
                        </h2>
                        <div className="row row-xxl bordered-classic">
                            <div className="col-6 col-sm-4 col-md-3"><a className="clients-classic wow slideInLeft" href="#"><img src="images/clients-1-160x110.png" alt="" width="160" height="110" /></a></div>
                            <div className="col-6 col-sm-4 col-md-3"><a className="clients-classic wow slideInDown" href="#" data-wow-delay=".1s"><img src="images/clients-2-160x110.png" alt="" width="160" height="110" /></a></div>
                            <div className="col-6 col-sm-4 col-md-3"><a className="clients-classic wow slideInDown" href="#" data-wow-delay=".2s"><img src="images/clients-3-160x110.png" alt="" width="160" height="110" /></a></div>
                            <div className="col-6 col-sm-4 col-md-3"><a className="clients-classic wow slideInRight" href="#" data-wow-delay=".3s"><img src="images/clients-4-160x110.png" alt="" width="160" height="110" /></a></div>
                            <div className="col-6 col-sm-4 col-md-3"><a className="clients-classic wow slideInLeft" href="#" data-wow-delay=".3s"><img src="images/clients-5-160x110.png" alt="" width="160" height="110" /></a></div>
                            <div className="col-6 col-sm-4 col-md-3"><a className="clients-classic wow slideInUp" href="#" data-wow-delay=".2s"><img src="images/clients-6-160x110.png" alt="" width="160" height="110" /></a></div>
                            <div className="col-6 col-sm-4 col-md-3"><a className="clients-classic wow slideInUp" href="#" data-wow-delay=".1s"><img src="images/clients-7-160x110.png" alt="" width="160" height="110" /></a></div>
                            <div className="col-6 col-sm-4 col-md-3"><a className="clients-classic wow slideInRight" href="#"><img src="images/clients-8-160x110.png" alt="" width="160" height="110" /></a></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Clients;