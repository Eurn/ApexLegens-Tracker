import { Link } from "react-router-dom";
import React from "react";
import { LogoSVG } from "../assets/logo";

const Header = () => {
  return (
    <nav className="h-20 w-screen flex bg-black">
      <div className="min-w-[1282px] px-4 flex justify-between text-white items-center">
        <Link to="/">
          <LogoSVG />
        </Link>
        <Link to="/favorite">Favorite</Link>
      </div>
    </nav>
  );
};

export default React.memo(Header);
