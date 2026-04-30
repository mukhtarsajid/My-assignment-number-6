 import React from 'react';
 
 const PricingCard = ({ title, price, highlight }) => {
  return (
    <div className={`card ${highlight ? "highlight" : ""}`}>
        <div class="pricing-card">
  <h3 class="title">Starter</h3>
  <p class="subtitle">Perfect for getting started</p>

  <div class="price">
    <span class="amount">$0</span>
    <span class="duration">/Month</span>
  </div>

  <ul class="features">
    <li>Access to 10 free tools</li>
    <li>Basic templates</li>
    <li>Community support</li>
    <li>1 project per month</li>
  </ul>

  <button class="btn">Get Started Free</button>
</div>
      {/* <h3>{title}</h3>
      <p>{price}</p>
      <button className="btn-primary">Select</button> */}
    </div>
  );
};

export default PricingCard;
 
