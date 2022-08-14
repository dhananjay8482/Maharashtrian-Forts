import navlogo from "../assets/navbar-logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="nav--logo" />
      <h4>Maharashtrian Forts</h4>
    </div>
  );
}
