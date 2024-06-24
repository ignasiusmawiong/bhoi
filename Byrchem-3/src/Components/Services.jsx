import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className='services'>
      <div className="service-header">
        <h1>Our Web Development Services</h1>
        <p>We provide a wide range of web development services to help your business grow online.</p>
      </div>
      <div className="service-list">
        <div className="service-item">
          <h2>Website Design</h2>
          <p>We create beautiful, user-friendly websites that are optimized for performance and usability. Our designs are tailored to meet your specific needs and objectives.</p>
        </div>
        <div className="service-item">
          <h2>Responsive Development</h2>
          <p>Our websites are fully responsive, ensuring they look great and function flawlessly on all devices, from desktops to smartphones.</p>
        </div>
        <div className="service-item">
          <h2>eCommerce Solutions</h2>
          <p>We offer comprehensive eCommerce solutions, including online stores, payment gateways, and shopping cart integration to help you sell your products online.</p>
        </div>
        <div className="service-item">
          <h2>Content Management Systems (CMS)</h2>
          <p>We specialize in CMS development, providing easy-to-use platforms for managing your website content without needing technical skills.</p>
        </div>
        <div className="service-item">
          <h2>SEO Optimization</h2>
          <p>Our SEO services improve your website's visibility on search engines, driving more traffic to your site and helping you reach a larger audience.</p>
        </div>
        <div className="service-item">
          <h2>Custom Web Applications</h2>
          <p>We develop custom web applications tailored to your business needs, from simple websites to complex web-based software solutions.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
