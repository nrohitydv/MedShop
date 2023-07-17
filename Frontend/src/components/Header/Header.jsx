import logo from "..//../assets/images/logo.png";

function Header() {
  return (
    <header className="header flex items-center">
      <div className="conatiner">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
