"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import mainTextAnimation from "../../../public/mainTextAnimation.json";
import phoneMockupAnimation from "../../../public/phoneMockupAnimation.json";

const HomeContent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-7 md:px-[60px] lg:h-screen lg:flex-row">
      <div className="hidden items-center justify-center lg:flex">
        <div className="flex flex-row items-center gap-[120px]">
          <div>
            <Lottie
              animationData={mainTextAnimation}
              loop={true}
              style={{
                height: 140,
                width: 510,
              }}
            />
            <div>
              <div className="mb-4 mt-[56px] text-base font-semibold leading-[24px] text-neutral-900">
                Mooncake offers a decentralised social networking experience
                where your <br /> profile, contents and connections are truly
                yours.
              </div>
              <div className="text-base font-normal leading-[24px] text-neutral-900">
                Experience a censorship resistance platform where your
                engagement can turn <br /> into tangible rewards and your
                endorsement shapes credibility.
              </div>
            </div>
            <div className="mt-[56px] flex flex-row gap-4 md:gap-6">
              <Link
                className="relative h-[48px] w-[151.5px] md:h-[68px] md:w-[229px]"
                href={""}
              >
                <Image
                  src={"/appStoreLogo.png"}
                  alt={"App Store Button"}
                  fill
                  sizes={"20vw"}
                />
              </Link>
              <Link
                className="relative h-[48px] w-[151.5px] md:h-[68px] md:w-[229px]"
                href={""}
              >
                <Image
                  src={"/googlePlayLogo.png"}
                  alt={"Google Play Button"}
                  fill
                  sizes={"20vw"}
                />
              </Link>
            </div>
          </div>
          <Lottie animationData={phoneMockupAnimation} loop={true} />
        </div>
      </div>
      <div className="relative my-10 h-[335px] w-[320px] md:my-[60px] md:h-[526px] md:w-[500px] lg:hidden">
        <Image
          src={"/phoneMockupDesktop.png"}
          alt={"Phone Mockup"}
          fill
          priority={true}
          sizes={"50vw"}
        />
      </div>
      <div>
        <div className="bondscape-text-gradient bg-clip-text text-left text-[32px] font-medium leading-[48px] text-transparent md:text-[56px] md:leading-[84px] lg:hidden">
          Engage, <br /> Empower, Endorse
        </div>
        <div className="md:hidden">
          <div className="mb-4 mt-6 text-base font-semibold leading-[24px] text-neutral-900 ">
            Mooncake offers a decentralised social <br /> networking experience
            where your <br /> profile, contents and connections are <br /> truly
            yours.
          </div>
          <div className="mb-12 text-base font-normal leading-[24px] text-neutral-900">
            Experience a censorship resistance <br /> platform where your
            engagement can <br />
            turn into tangible rewards and your <br /> endorsement shapes
            credibility.
          </div>
        </div>
        <div className="hidden md:block lg:hidden">
          <div className="mb-4 mt-6 text-base font-semibold leading-[24px] text-neutral-900">
            Mooncake offers a decentralised social networking experience where
            your <br /> profile, contents and connections are truly yours.
          </div>
          <div className="mb-10 text-base font-normal leading-[24px] text-neutral-900">
            Experience a censorship resistance platform where your engagement
            can turn <br /> into tangible rewards and your endorsement shapes
            credibility.
          </div>
        </div>
      </div>
      <div className="mb-[100px] flex flex-row items-center justify-center gap-4 md:gap-6 lg:hidden">
        <div className="relative h-[48px] w-[151.5px] md:h-[68px] md:w-[229px]">
          <Image
            src={"/appStoreLogo.png"}
            alt={"App Store Button"}
            fill
            sizes={"10vw"}
          />
        </div>
        <div className="relative h-[48px] w-[151.5px] md:h-[68px] md:w-[229px]">
          <Image
            src={"/googlePlayLogo.png"}
            alt={"Google Play Button"}
            fill
            sizes={"10vw"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
