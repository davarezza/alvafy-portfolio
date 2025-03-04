import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Image from "next/image";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-28 md:py-40 lg:py-52 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent, black_10%, black_70%, transparent)]">
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
          <StarIcon className="size-28 text-emerald-300/80" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={10}>
          <StarIcon className="size-12 text-emerald-300/80" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={90}>
          <StarIcon className="size-8 text-emerald-300/80" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-20}>
          <SparkleIcon className="size-8 text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={70}>
          <SparkleIcon className="size-5 text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={175}>
          <SparkleIcon className="size-10 text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={140}>
          <SparkleIcon className="size-14 text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={-10}>
          <SparkleIcon className="size-4 rounded-full text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={10}>
          <SparkleIcon className="size-4 rounded-full text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={80}>
          <SparkleIcon className="size-4 rounded-full text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-35}>
          <SparkleIcon className="size-4 rounded-full text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-5}>
          <SparkleIcon className="size-4 rounded-full text-emerald-300/40" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center relative">
          <Image src={memojiImage} className="size-[120px]" alt="Memoji" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <StarIcon className="size-6 text-emerald-300/80" />
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
            <SparkleIcon className="size-4 text-emerald-300/40" />
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
            <SparkleIcon className="size-4 text-emerald-300/40" />
          </div>
          <div className="bg-gray-950 border-gray-800 px-5 py-2 inline-flex items-center gap-5 rounded-lg mt-4">
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