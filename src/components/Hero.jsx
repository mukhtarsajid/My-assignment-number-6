
import png from "../assets/banner.png";



const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Supercharge Your Digital Workflow</h1>
        <p>
          Access premium AI tools, templates and assets in one place.
        </p>
        <button>Explore Products</button>
      </div>

      <div className="hero-right">
        <img src={png} alt="banner" />
      </div>
    </section>
  );
};

export default Hero;
// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="hero-left">
//         <h1>Supercharge Your Digital Workflow</h1>
//         <p>
//           Access premium AI tools, templates and assets in one place.
//         </p>
//         <button>Explore Products</button>
//       </div>

//       <div className="hero-right">
//         <img src="png" alt="" />
//       </div>
//     </section>
//   );
// };

// export default Hero;

//  import React from 'react';
 
//  const Hero = () => {
//     return (
//        <div className="hero">
//       <div>
//         <h1>Supercharge Your Digital Workflow</h1>
//         <p>Access premium tools and boost productivity</p>

//         <br />

//         <button className="btn-primary">Explore</button>
//         <button className="btn-outline">Watch Demo</button>
//       </div>

//       <img src="/hero.png" alt="" />
//     </div>
//     );
//  };
 
//  export default Hero;