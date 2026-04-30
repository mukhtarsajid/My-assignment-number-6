import React from 'react';
import PricingCard from "./PricingCard";

const Pricing = () => {
    return (
        <div className="pricing">
            <h2>Simple, Transparent Pricing</h2>
            <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            <div className="grid">

                <div>
                    <PricingCard title="Starter" price="$0" />
                    
                </div>
                <div>
                    <PricingCard title="Pro" price="$29" highlight />
                </div>
                <div>
                    <PricingCard title="Enterprise" price="$99" />
                </div>
            </div>
        </div>
    );
};

export default Pricing;