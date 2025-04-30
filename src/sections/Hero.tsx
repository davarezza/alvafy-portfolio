import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Image from "next/image";
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="py-28 md:py-40 lg:py-52 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage:`url(${grainImage.src})`}}></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-150} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="25s"><StarIcon className="size-28 text-emerald-300/80" /></HeroOrbit>
        <HeroOrbit size={800} rotation={30} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="25s"><StarIcon className="size-28 text-emerald-300/80" /></HeroOrbit>
        <HeroOrbit size={550} rotation={-90} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="21s"><StarIcon className="size-12 text-emerald-300/80" /></HeroOrbit>
        <HeroOrbit size={550} rotation={90} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="21s"><StarIcon className="size-12 text-emerald-300/80" /></HeroOrbit>
        <HeroOrbit size={590} rotation={-30} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="22s"><StarIcon className="size-8 text-emerald-300/80" /></HeroOrbit>
        <HeroOrbit size={590} rotation={150} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="22s"><StarIcon className="size-8 text-emerald-300/80" /></HeroOrbit>
        <HeroOrbit size={430} rotation={-120} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="19s"><SparkleIcon className="size-8 text-emerald-300/40" /></HeroOrbit>
        <HeroOrbit size={430} rotation={60} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="19s"><SparkleIcon className="size-8 text-emerald-300/40" /></HeroOrbit>
        <HeroOrbit size={530} rotation={0} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="20s"><SparkleIcon className="size-10 text-emerald-300/40" /></HeroOrbit>
        <HeroOrbit size={710} rotation={-75} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="24s"><SparkleIcon className="size-14 text-emerald-300/40" /></HeroOrbit>
        <HeroOrbit size={710} rotation={105} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="24s"><SparkleIcon className="size-14 text-emerald-300/40" /></HeroOrbit>
        <HeroOrbit size={720} rotation={-15} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="18s"><SparkleIcon className="size-4 rounded-full text-emerald-300/40" /></HeroOrbit>
        <HeroOrbit size={720} rotation={165} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="18s"><SparkleIcon className="size-4 rounded-full text-emerald-300/40" /></HeroOrbit>
        <HeroOrbit size={520} rotation={-135} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="18s"><SparkleIcon className="size-4 rounded-full text-emerald-300/40" /></HeroOrbit>
        <HeroOrbit size={520} rotation={45} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="18s"><SparkleIcon className="size-4 rounded-full text-emerald-300/40" /></HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center relative">
          <Image src={memojiImage} className="size-[120px]" alt="Memoji" />
          <div className="bg-gray-950 border-gray-800 px-4 py-2 inline-flex items-center gap-4 rounded-lg mt-4">
            <div className="bg-green-500 size-3 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-semibold text-2xl md:text-3xl text-center mt-8 tracking-wide">
            Building Robust and Scalable Server-Side Solutions
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in creating scalable, secure, and efficient server-side
            applications. Let&apos;s discuss your next project and bring it to
            life.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <Link href="#projects" scroll={true} className="inline-flex items-center gap-2 border border-white/15 px-6 py-2.5 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </Link>
          <Link href="#contact" scroll={true} className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-2.5 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </Link>
        </div>
      </div>
    </div>
  );
};