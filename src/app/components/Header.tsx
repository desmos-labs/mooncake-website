import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="px-5 py-4 md:px-[40px] md:py-[20px] lg:px-[80px] ">
      <div className="relative h-logo-mobile w-logo-mobile transition-all duration-300 ease-in-out md:h-logo-desktop md:w-logo-desktop lg:hover:scale-125">
        <Image alt={"logo"} src={"/desktopLogo.png"} fill />
      </div>
    </div>
  );
};

export default Header;
