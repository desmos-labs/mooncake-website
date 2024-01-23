import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="px-5 py-4 md:px-[40px] md:py-[20px] lg:px-[80px] ">
      <Link href={"/"}>
        <div className="relative h-[28px] w-[122px] md:h-[40px] md:w-[175px]">
          <Image alt={"logo"} src={"/desktopLogo.png"} fill sizes={"20vw"} />
        </div>
      </Link>
    </div>
  );
};

export default Header;
