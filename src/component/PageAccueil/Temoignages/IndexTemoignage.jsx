import React, { Component } from 'react';
import styled from 'styled-components';
import './styleIndexTemoignage.css';

class IndexTemoignage extends Component {
  render() {
    return (

     <div className="testimonials">
      <div className="inner">
        <h1>Testimonials</h1>
        <div className="border"></div>

        <div className="row">
          <div className="col">
            <div className="testimonial">
              <img src="/assets/p1.png" alt=""/>
              <div className="name">Full name</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img src="/assets/p2.png" alt=""/>
              <div className="name">Full name</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img src="/assets/p3.png" alt=""/>
              <div className="name">Full name</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}
}

export default IndexTemoignage;
