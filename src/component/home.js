import React, { Component } from 'react';
import './bootstrap.css';
import './style.css';

class Home extends Component {
    render() {
        return (
            <div>
                <section className="section section-full section-inset-1 bg-default text-center bg-image background-position-1 bgimg" id="home">
                    <div className="container">
                        <div className="title-style-1-wrap">
                            <div className="oh-desktop wow slideInLeft">
                                <h1 className="title-style-1 wow slideInRight">Felicity</h1>
                            </div>
                        </div>
                        <div className="title-style-2-wrap">
                            <div className="oh-desktop wow slideInRight">
                                <h5 className="title-style-2 wow slideInLeft">IIIT-H Annual Techno Cultural Fest</h5>
                            </div>
                        </div><a className="button button-default wow fadeInUp" href="about.html">More about us</a>
                    </div>
                </section>
            </div>
        );
    }
}
export default Home;