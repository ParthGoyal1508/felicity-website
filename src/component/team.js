import React, { Component } from 'react';
import './bootstrap.css';
import './style.css';

class Team extends Component {
    render() {
        return (
            <div>
            <section className="section section-full section-sm bg-default text-md-center" id="team">
                <div className="container">
                    <div className="subtitle-classic wow fadeInUp">Meet our team</div>
                    <h2><span className="d-inline-block wow fadeInLeft">People behind</span> <span className="text-primary d-inline-block wow fadeInRight">our success</span>
                    </h2>
                    <div className="row row-lg row-30 justify-content-center">
                        <div className="col-sm-6 col-md-4">
                            <article className="team-classic box-md"><img src="/images/team-1-370x502.jpg" alt="" width="370" height="502" />
                                <div className="team-classic-caption">
                                    <div>
                                        <h4 className="team-classic-name"><a href="#">Sarah McMillan</a></h4>
                                        <div className="team-classic-status">Web Designer</div>
                                        <ul className="list-inline team-classic-list-social list-inline-sm">
                                            <li><a className="icon fa fa-linkedin" href="#"></a></li>
                                            <li><a className="icon fa fa-twitter" href="#"></a></li>
                                            <li><a className="icon fa fa-facebook" href="#"></a></li>
                                            <li><a className="icon fa fa-instagram" href="#"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <article className="team-classic box-md"><img src="/images/team-2-370x502.jpg" alt="" width="370" height="502" />
                                <div className="team-classic-caption">
                                    <div>
                                        <h4 className="team-classic-name"><a href="#">Eric Smith</a></h4>
                                        <div className="team-classic-status">CEO, Founder</div>
                                        <ul className="list-inline team-classic-list-social list-inline-sm">
                                            <li><a className="icon fa fa-linkedin" href="#"></a></li>
                                            <li><a className="icon fa fa-twitter" href="#"></a></li>
                                            <li><a className="icon fa fa-facebook" href="#"></a></li>
                                            <li><a className="icon fa fa-instagram" href="#"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <article className="team-classic box-md"><img src="/images/team-3-370x502.jpg" alt="" width="370" height="502" />
                                <div className="team-classic-caption">
                                    <div>
                                        <h4 className="team-classic-name"><a href="#">Ted Johnson</a></h4>
                                        <div className="team-classic-status">Web Developer</div>
                                        <ul className="list-inline team-classic-list-social list-inline-sm">
                                            <li><a className="icon fa fa-linkedin" href="#"></a></li>
                                            <li><a className="icon fa fa-twitter" href="#"></a></li>
                                            <li><a className="icon fa fa-facebook" href="#"></a></li>
                                            <li><a className="icon fa fa-instagram" href="#"></a></li>
                                        </ul>
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
export default Team;