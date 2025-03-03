import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-28 md:py-40 lg:py-52 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={10}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[120px]" alt="Memoji" />
          <div className="bg-gray-950 border-gray-800 px-5 py-2 inline-flex items-center gap-5 rounded-lg">
            <div className="bg-green-500 size-3 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif font-semibold text-2xl md:text-3xl text-center mt-8 tracking-wide">
            Building Robust and Scalable Server-Side Solutions
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in creating scalable, secure, and efficient server-side
            applications. Let&apos;s discuss your next project and bring it to
            life.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 py-2.5 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-2.5 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
