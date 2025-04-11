'use client';

import Image from 'next/image';
import { siteConfig } from '@/configs/config';
import AnimationContainer from '../utils/AnimationContainer';
import Link from 'next/link';
import Hyperspeed from '@/components/content/effect/Hyperspeed'; 

const Hero = () => {
  return (
    <div className="w-full flex justify-between flex-col-reverse lg:flex-row items-center relative">
      {/* Hyperspeed Effect Background */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            },
          }}
        />
      </div>

      {/* Content Section */}
      <AnimationContainer customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
          <span className="font-mono text-teal-500 dark:text-teal-300">Hello!{' '}</span>
          <span className="font-mono text-pink-500 dark:text-pink-300">I am</span>
        </p>
        <h1 className="font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 mx-auto lg:mx-0 text-gray-900 dark:text-white">
          {siteConfig.author}
        </h1>
        <h2 className="flex items-center gap-2 text-lg lg:text-xl text-gray-700 dark:text-gray-400 mb-8 mx-auto lg:mx-0">
          <span className="relative w-[max-content] font-mono typing-animation text-gray-800 dark:text-gray-200">
            I'm a Full Stack Developer And Web Developers
          </span>
        </h2>
        
        {/* Buttons Section */}
        <div className="flex gap-4 mt-6">
          <Link
            href={`mailto:${siteConfig.social.email}`}
            className="px-4 py-2 sm:px-6 sm:py-3 text-teal-500 font-bold rounded-lg border border-teal-500 hover:bg-teal-500 hover:text-white transition duration-300 backdrop-blur-sm bg-white/20 dark:bg-gray-800/30 dark:border-teal-300 dark:text-teal-300 dark:hover:bg-teal-600 dark:hover:text-white"
          >
            Hire Me
          </Link>
          <Link
            href={siteConfig.social.kofi}
            className="px-4 py-2 sm:px-6 sm:py-3 text-pink-500 font-bold rounded-lg border border-pink-500 hover:bg-pink-500 hover:text-white transition duration-300 backdrop-blur-sm bg-white/20 dark:bg-gray-800/30 dark:border-pink-300 dark:text-pink-300 dark:hover:bg-pink-600 dark:hover:text-white"
          >
            Buy Me a Coffee and Cake
          </Link>
        </div>
      </AnimationContainer>

      {/* Image Section */}
      <AnimationContainer customClassName="w-[150px] sm:w-[250px] relative mb-6 lg:mb-0">
        <Image
          alt={siteConfig.author}
          src={siteConfig.profile_image}
          width={250}
          height={250}
          priority
          className="rounded-[12px] filter grayscale hover:grayscale-0 transition ease bg-background/30 dark:bg-background/30"
        />
      </AnimationContainer>
    </div>
  );
};

export default Hero;
