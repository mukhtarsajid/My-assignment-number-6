

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h2>DigiTools</h2>

      <ul>
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>FAQ</li>
      </ul>

      <div className="nav-right">
        <span> <img src="" alt="" />{cartCount}</span>
        <button>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;

//  import React from 'react';
 
//  const Navbar = () => {
//     return (
//          <div className="navbar">
//       <h2>DigiTools</h2>

//       <ul>
//         <li>Products</li>
//         <li>Features</li>
//         <li>Pricing</li>
//         <li>FAQ</li>
//       </ul>

//       <div>
//         <button>Login</button>
//         <button className="btn-primary">Get Started</button>
//       </div>
//     </div>
//     );
//  };
 
//  export default Navbar;