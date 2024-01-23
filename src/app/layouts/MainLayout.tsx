import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";

interface Props {
  readonly background?: boolean;
  readonly children?: React.ReactNode;
}

const MainLayout = ({ background, children }: Props) => {
  return (
    <div className="flex h-dvh flex-col">
      <div
        className={`${background ? "bg-home-hero-mobile md:bg-home-hero-tablet lg:bg-home-hero-desktop " : ""}}  flex flex-grow flex-col  bg-cover bg-no-repeat`}
      >
        <header>
          <Header />
        </header>
        <main className="flex h-full items-center justify-center">
          {children}
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
