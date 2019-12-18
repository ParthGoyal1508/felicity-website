import React, { Component } from 'react';
import './bootstrap.css';
import './style.css';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="section section-full section-xs section-first bg-default text-md-center" id="projects">
                    <div className="container">
                        <div className="subtitle-classic wow fadeInUp">Portfolio</div>
                        <h2><span className="d-inline-block wow fadeInLeft">Our featured</span> <span className="text-primary d-inline-block wow fadeInRight">projects</span>
                        </h2>
                        <div className="row row-lg row-30">
                            <div className="col-sm-6 col-md-4 wow blurIn" data-wow-delay=".2s">
                                <article className="project-classic box-md"><img src="images/project-1-370x262.jpg" alt="" width="370" height="262" />
                                    <div className="project-classic-caption">
                                        <div>
                                            <h4 className="project-classic-title"><a href="single-project.html">iStep Ltd.</a></h4>
                                            <div className="project-classic-tag">Web Design</div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-md-4 wow blurIn" data-wow-delay=".1s">
                                <article className="project-classic box-md"><img src="images/project-2-370x262.jpg" alt="" width="370" height="262" />
                                    <div className="project-classic-caption">
                                        <div>
                                            <h4 className="project-classic-title"><a href="single-project.html">Fabricator</a></h4>
                                            <div className="project-classic-tag">Web Development</div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-md-4 wow blurIn">
                                <article className="project-classic box-md"><img src="images/project-3-370x262.jpg" alt="" width="370" height="262" />
                                    <div className="project-classic-caption">
                                        <div>
                                            <h4 className="project-classic-title"><a href="single-project.html">Fresh Market</a></h4>
                                            <div className="project-classic-tag">SEO</div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-md-4 wow blurIn">
                                <article className="project-classic box-md"><img src="images/project-4-370x262.jpg" alt="" width="370" height="262" />
                                    <div className="project-classic-caption">
                                        <div>
                                            <h4 className="project-classic-title"><a href="single-project.html">Accessories Inc.</a></h4>
                                            <div className="project-classic-tag">Online Marketing</div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-md-4 wow blurIn" data-wow-delay=".1s">
                                <article className="project-classic box-md"><img src="images/project-5-370x262.jpg" alt="" width="370" height="262" />
                                    <div className="project-classic-caption">
                                        <div>
                                            <h4 className="project-classic-title"><a href="single-project.html">Corpadvise</a></h4>
                                            <div className="project-classic-tag">SMM</div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-md-4 wow blurIn" data-wow-delay=".2s">
                                <article className="project-classic box-md"><img src="images/project-6-370x262.jpg" alt="" width="370" height="262" />
                                    <div className="project-classic-caption">
                                        <div>
                                            <h4 className="project-classic-title"><a href="single-project.html">Greenbiz</a></h4>
                                            <div className="project-classic-tag">Branding</div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Portfolio;