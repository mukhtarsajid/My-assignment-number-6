import user from "../assets/./products/user.png"
import packageImg from "../assets/./products/package.png"
import rocket from "../assets/./products/rocket.png"
const Steps = () => {
  return (
    <>
    <div className="Started">
    <h1>Get Started in 3 Steps</h1>
    <p>Start using premium digital tools in minutes, not hours.</p>
    </div>
    <section className="steps">
      <div>
<img src={user} alt="" />
<h3>Create Account</h3>
<p>Sign up for free in seconds. No credit card required to get started.</p>
      </div>
      <div> <img src={packageImg} alt="" />
      <h3>Create Account</h3>
<p>Sign up for free in seconds. No credit card required to get started.</p>
      </div>
      <div><img src={rocket}alt="" />
<h3>Create Account</h3>
<p>Sign up for free in seconds. No credit card required to get started.</p>
      </div>
    </section>
    </>
  );
};

export default Steps;
//  import React from 'react';
 
//  const Steps = () => {
//   return (
//     <div className="steps">
//       <h2>3 Steps</h2>

//       <div className="grid">
//         <div className="card">Create Account</div>
//         <div className="card">Choose Product</div>
//         <div className="card">Start</div>
//       </div>
//     </div>
//   );
// };

// export default Steps;