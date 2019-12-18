import React, { Component } from 'react';
import './bootstrap.css';
import './style.css';

class Blog extends Component {
    render() {
        return (
            <div>
                <section className="section section-full section-xs section-last bg-default text-md-center" id="news">
                    <div className="container">
                        <div className="subtitle-classic wow fadeInUp">Recent posts</div>
                        <h2><span className="d-inline-block wow fadeInLeft">Latest news</span> <span className="d-inline-block wow fadeInRight">& updates</span>
                        </h2>
                        <div className="row row-xxl row-30 justify-content-center">
                            <div className="col-sm-6 col-lg-4 wow blurIn" data-wow-delay=".1s">
                                <article className="post-classic">
                                    <div className="post-classic-time">
                                        <time datetime="2018-05-04">May 4, 2018</time>
                                    </div>
                                    <h4 className="post-classic-title"><a href="blog-post.html">Top 10 Web Design Trends in 2018</a></h4>
                                    <p className="post-classic-text">As we look forward to 2018, the big question on every designer’s mind has to be: what will define design this year? We asked the most prominent designers and…</p>
                                    <div className="post-classic-author">by Sofia Helin</div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-lg-4 wow blurIn">
                                <article className="post-classic">
                                    <div className="post-classic-time">
                                        <time datetime="2018-05-04">May 4, 2018</time>
                                    </div>
                                    <h4 className="post-classic-title"><a href="blog-post.html">Designing for a Local Audience</a></h4>
                                    <p className="post-classic-text">Local design techniques require a lot of attention to detail and personalization. In this article, we want to discuss 5 ways in which web design can be more aptly…</p>
                                    <div className="post-classic-author">by Jay Benjamin</div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-lg-4 wow blurIn" data-wow-delay=".1s">
                                <article className="post-classic">
                                    <div className="post-classic-time">
                                        <time datetime="2018-05-04">May 4, 2018</time>
                                    </div>
                                    <h4 className="post-classic-title"><a href="blog-post.html">How to Design Your Site for Mobile Speed</a></h4>
                                    <p className="post-classic-text">Have you performed a mobile speed test lately? How does your website rank? A slow website can turn mobile users away. Ideally, you want your design to load just…</p>
                                    <div className="post-classic-author">by Mark Stone</div>
                                </article>
                            </div>
                        </div><a className="button button-default" href="blog-post.html">More news</a>
                    </div>
                </section>
            </div>
        );
    }
}
export default Blog;