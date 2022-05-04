import ImageHeader from "../Images/john-header.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="image-container">
        <>
          <img className="banner" src={ImageHeader} alt="John Mayer Banner" />
          <div className="header-gradient">
            <h1 className="main-title wrapper">John Mayer Song Finder</h1>
            <p className="header-subtitle wrapper">
              Since beginning his music career in the late 90s, John Mayer has
              emerged as a talented solo artist and musician.The winner of seven
              Grammy Awards, he became successful across genres, establishing
              himself in contemporary rock and broadening his scope to
              incorporate the blues. Most of his albums are commercially
              successful and have been accredited multi-platinum.{" "}
            </p>
          </div>
        </>
      </div>
    </header>
  );
};
export default Header;
