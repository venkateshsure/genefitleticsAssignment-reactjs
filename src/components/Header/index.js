import "./index.css";

const Header = () => (
  <div className="main-nav-con">
    <div className="head-con-header">
      <img
        alt="genefitletics"
        src="https://play-lh.googleusercontent.com/UFzOnwZ5a1r7EVtliGPnZ8X5Fm4iDUGinGeG8ObqaKEde47VNw-8x1KygsjRIMdi6Q"
        className="image"
      />

      <h1 className="heading">Genefitletics</h1>
    </div>
    <div className="nav-section">
      <p className="para">Learn</p>
      <p className="para">customer support</p>
      <button className="button" type="button">
        Login
      </button>
    </div>
  </div>
);

export default Header;
