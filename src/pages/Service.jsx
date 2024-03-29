import React from "react-dom";
export default function Service() {
  return (
    <div className="services-area">
      <div className="service-text">
        <h4 className="my-header">PRICING</h4>
        <h3 className="my-header">Get started for free</h3>
        <p className="my-header">
          Our pricing is transparent, straight-forward and grows with your
          company, while making it to easy to get started with Tola fast
        </p>
      </div>
      <div className="services-prices">
        <div className="price-image">
          {" "}
          <img src="/images/Rectangle 35.png" alt="" />
        </div>
        <div className="price-image">
          <img src="/images/Rectangle 36.png" alt="" />
        </div>
        <div className="price-image">
          {" "}
          <img src="/images/Rectangle 37.png" alt="" />
        </div>
      </div>
    </div>
  );
}
